'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { LegendItem } from '@/components/legend-item';
import { Maps } from '@/components/maps';
import { RegionCallout } from '@/components/region-callout';
import { changePriceRegion, priceTypeRegion } from '@/data/price';
import { changePriceLegendStatic, priceLegendStatic } from '@/data/price-legend';
import { oneYearData, threeMonthsData } from '@/data/stocks';
import { useInfoPriceStore } from '@/hooks/use-change-price-store';
import { useCommodityStore } from '@/hooks/use-commodity-store';
import { useTypePriceStore } from '@/hooks/use-price-type-store';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/registry/new-york-v4/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';
import { PriceTypeRegionValue } from '@/types/price';

import { getRegionStyle } from '../helper/get-price-style';
import { getRegionValues } from '../helper/get-region-values';
import { getRegionVisual } from '../helper/get-region-visual';
import { RegionId, regionLayout } from '../helper/region-layout';
import { Info } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const REGION_KEYS = [
    'Kabupaten Malinau',
    'Kabupaten Nunukan',
    'Kabupaten Bulungan',
    'Kabupaten Tana Tidung',
    'Kota Tarakan'
] as const;

type RegionName = (typeof REGION_KEYS)[number];

const KaltaraMap: React.FC = () => {
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const wiresRef = useRef<SVGSVGElement | null>(null);
    const [open, setOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<RegionName | null>(null);
    const [period, setPeriod] = useState('3bulan');
    const chartData = period === '3bulan' ? threeMonthsData : oneYearData;
    const activeTab = useTypePriceStore((s) => s.selectedPriceType);
    const activeTabChangePrice = useInfoPriceStore((s) => s.activeTab);
    const selectedCommodity = useCommodityStore((state) => state.selectedCommodity);

    const isLevelPrice = activeTab === 'level-harga';
    const isKaltara = activeTab === 'kaltara';

    const priceTypeValues = getRegionValues(priceTypeRegion, selectedCommodity, 'level-harga');

    const kaltara = getRegionValues(changePriceRegion, selectedCommodity, 'kaltara');

    const displayedValues = isLevelPrice ? priceTypeValues : kaltara;

    const getRegionFillClass = (regionId: RegionId) => getRegionVisual(selectedCommodity, activeTab, regionId).fill;

    const legendStatic = activeTab === 'level-harga' ? priceLegendStatic : changePriceLegendStatic;

    // --- Connector lines (hanya render di ≥1280px) ---
    useEffect(() => {
        const wrap = wrapRef.current!;
        const wires = wiresRef.current!;

        if (!wrap || !wires) return;

        const getRect = (el: Element) => el.getBoundingClientRect();
        const toRel = (pt: { x: number; y: number }, base: DOMRect) => ({
            x: ((pt.x - base.left) / base.width) * 100,
            y: ((pt.y - base.top) / base.height) * 100
        });

        const draw = () => {
            if (typeof window === 'undefined') return;
            // hanya tampilkan garis di layar ≥ 1280px
            if (window.innerWidth < 1280) {
                wires.innerHTML = '';

                return;
            }
            const base = getRect(wrap);
            wires.innerHTML = '';

            document.querySelectorAll<HTMLElement>('.callout').forEach((card) => {
                const anchorSel = card.getAttribute('data-anchor');
                if (!anchorSel) return;
                const anc = document.querySelector(anchorSel) as HTMLElement | null;
                if (!anc) return;

                const cr = getRect(card);
                const ar = getRect(anc);

                const startX = ar.left > cr.right ? cr.right : ar.right < cr.left ? cr.left : (cr.left + cr.right) / 2;
                const startY = cr.top + cr.height / 2;
                const endX = ar.left + ar.width / 2;
                const endY = ar.top + ar.height / 2;

                const s = toRel({ x: startX, y: startY }, base);
                const e = toRel({ x: endX, y: endY }, base);

                const dx = e.x - s.x,
                    dy = e.y - s.y,
                    L = Math.hypot(dx, dy) || 1,
                    ux = dx / L,
                    uy = dy / L;
                const ex = e.x - ux * 1;
                const ey = e.y - uy * 1;

                const midX = s.x + (ex - s.x) * 0.55;

                const ns = 'http://www.w3.org/2000/svg';
                const pl = document.createElementNS(ns, 'polyline');
                pl.setAttribute('points', `${s.x},${s.y} ${midX},${s.y} ${midX},${ey} ${ex},${ey}`);
                pl.setAttribute('fill', 'none');
                pl.setAttribute('stroke', '#0088CC');
                pl.setAttribute('stroke-width', '0.5');
                pl.setAttribute('stroke-linejoin', 'round');

                const endDot = document.createElementNS(ns, 'circle');
                endDot.setAttribute('cx', String(ex));
                endDot.setAttribute('cy', String(ey));
                endDot.setAttribute('r', '0.8');
                endDot.setAttribute('fill', '#0088CC');

                wires.appendChild(pl);
                wires.appendChild(endDot);
            });
        };

        // Tooltip hover untuk path (delegasi sederhana)
        const tip = document.getElementById('tooltip');
        const mapEl = document.getElementById('map');
        const onMouseMove = (e: MouseEvent) => {
            const target = e.target as SVGElement;
            if (!target || !(target as any).classList?.contains('region')) return;
            const name = (target as any).dataset?.name || (target as any).id || 'Wilayah';
            if (!tip || !mapEl) return;
            const mapRect = mapEl.getBoundingClientRect();
            tip.textContent = name;
            tip.style.left = e.clientX - mapRect.left + 14 + 'px';
            tip.style.top = e.clientY - mapRect.top + 14 + 'px';
            tip.classList.remove('hidden');
        };
        const onLeave = () => tip?.classList.add('hidden');

        window.addEventListener('load', draw);
        window.addEventListener('resize', draw);
        new ResizeObserver(draw).observe(wrap);
        mapEl?.addEventListener('mousemove', onMouseMove);
        mapEl?.addEventListener('mouseleave', onLeave);

        return () => {
            window.removeEventListener('load', draw);
            window.removeEventListener('resize', draw);
            mapEl?.removeEventListener('mousemove', onMouseMove);
            mapEl?.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    useEffect(() => {
        const mapEl = document.getElementById('map');
        if (!mapEl) return;
        const onClick = (e: any) => {
            const t = e.target as SVGElement;
            if (!t?.classList?.contains('region')) return;
            const name = (t as any).dataset?.name || (t as any).getAttribute('data-name') || (t as any).id || 'Wilayah';
            const match = REGION_KEYS.find((k) => k === name) ?? (name as RegionName);
            setSelectedRegion(match);
            setOpen(true);
        };
        mapEl.addEventListener('click', onClick);

        return () => mapEl.removeEventListener('click', onClick);
    }, []);

    return (
        <section className='mx-auto flex w-full flex-col items-center justify-center px-4 pt-10 md:pt-18'>
            {/* Container map fixed width = 615px */}
            <div
                id='map-wrap'
                ref={wrapRef}
                className='relative flex w-full flex-col items-center gap-12 lg:w-fit lg:flex-row lg:gap-24 xl:gap-0'>
                <Maps getRegionFillClass={getRegionFillClass} />

                {/* Anchors (titik pada peta) */}
                <div className='pointer-events-none absolute inset-0'>
                    <span
                        id='anc-nunukan'
                        className='absolute -translate-x-1/2 -translate-y-1/2'
                        style={{ left: '35%', top: '19%' }}></span>

                    <span
                        id='anc-malinau-1'
                        className='absolute -translate-x-1/2 -translate-y-1/2'
                        style={{ left: '37%', top: '67%' }}></span>

                    <span
                        id='anc-tana-tidung'
                        className='absolute -translate-x-1/2 -translate-y-1/2'
                        style={{ left: '69%', top: '27%' }}></span>

                    <span
                        id='anc-tarakan-1'
                        className='absolute -translate-x-1/2 -translate-y-1/2'
                        style={{ left: '85%', top: '30%' }}></span>

                    <span
                        id='anc-bulungan'
                        className='absolute -translate-x-1/2 -translate-y-1/2'
                        style={{ left: '70%', top: '45%' }}></span>
                </div>

                {/* Connector overlay (xl-only) */}
                {displayedValues?.length > 0 && (
                    <svg
                        id='wires'
                        ref={wiresRef}
                        className='pointer-events-none absolute inset-0 hidden xl:block'
                        viewBox='0 0 100 100'
                        preserveAspectRatio='none'
                    />
                )}

                <div className='sm:rid-cols-2 grid w-full grid-cols-1 gap-3 md:grid-cols-3 lg:w-fit lg:grid-cols-1 lg:gap-4'>
                    {displayedValues.map((region: PriceTypeRegionValue) => {
                        const layout = regionLayout[region.id];
                        const style = getRegionStyle(activeTab, region.status);

                        return (
                            <RegionCallout
                                key={region.id}
                                region={region}
                                layout={layout}
                                primaryValue={region.price}
                                showSecondary={!isLevelPrice && !!region.value}
                                secondaryValue={region.value}
                                secondaryClassName={style.valueColor}
                                badges={[
                                    {
                                        label: region.status,
                                        className: style.statusColor
                                    }
                                ]}
                            />
                        );
                    })}
                </div>
            </div>
            <div className='mt-8 w-full'>
                {activeTab == 'level-harga' && (
                    <div className='mb-8 flex w-full flex-wrap items-center justify-center gap-4 md:gap-6'>
                        {legendStatic.map((item: any) => {
                            const style = getRegionStyle(activeTab, item.label);

                            return <LegendItem key={item.key} label={item.label} bgClass={style.legendBg} />;
                        })}
                        {/* {activeTab === 'level-harga' && item.range && (
                            <span className='ml-1 text-gray-600'>{item.range}</span>
                        )} */}
                    </div>
                )}
                {activeTab == 'mtm' && (
                    <div className='flex items-start gap-2 p-3 text-xs text-gray-700 md:p-4 md:text-sm'>
                        <Info className='mt-0.5 h-5 w-5 shrink-0 text-blue-600' />
                        <div>
                            <p className='mb-1 font-medium text-gray-900'>Keterangan:</p>
                            <p className='leading-relaxed text-slate-600'>
                                Month To Month adalah perubahan rata-rata harga pada bulan berjalan dibandingkan
                                rata-rata harga pada 1 bulan sebelumnya
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className='sm:max-w-2xl! md:max-w-3xl! lg:max-w-4xl!'>
                    <DialogHeader>
                        <DialogTitle>
                            <div className='flex flex-col items-start justify-between gap-2 lg:flex-row'>
                                <h2 className='text-left text-xl font-semibold text-gray-900 lg:text-2xl'>
                                    {selectedRegion ?? 'Detail Daerah'}
                                </h2>
                                <Tabs value={period} onValueChange={setPeriod} className='w-auto lg:pr-5'>
                                    <TabsList className='grid w-full grid-cols-2'>
                                        <TabsTrigger value='3bulan' className='px-6'>
                                            3 Bulan
                                        </TabsTrigger>
                                        <TabsTrigger value='1tahun' className='px-6'>
                                            1 Tahun
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            </div>
                        </DialogTitle>
                        <DialogDescription className='text-left'>Neraca (ton)</DialogDescription>
                    </DialogHeader>

                    <ResponsiveContainer width='100%' height={400}>
                        <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id='colorStock' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='5%' stopColor='#60a5fa' stopOpacity={0.3} />
                                    <stop offset='95%' stopColor='#60a5fa' stopOpacity={0.05} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' vertical={false} />
                            <XAxis dataKey='date' stroke='#9ca3af' tick={{ fontSize: 12 }} tickLine={false} />
                            <YAxis stroke='#9ca3af' tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    padding: '8px 12px'
                                }}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} iconType='line' />
                            <Area
                                type='monotone'
                                dataKey='stock'
                                stroke='#3b82f6'
                                strokeWidth={2}
                                fill='url(#colorStock)'
                                name='Stock'
                                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default KaltaraMap;
