'use client';

import React from 'react';

import Image from 'next/image';

import clsx from 'clsx';

export type RegionLayout = {
    left: number;
    top: number;
    anchor?: string;
};

export type RegionBase = {
    id: string;
    name: string;
    icon: string;
};

export type RegionBadge = {
    label: string;
    className: string;
};

interface RegionCalloutProps {
    region: RegionBase;
    layout: RegionLayout;

    primaryValue?: string;

    primaryUnit?: string;

    secondaryValue?: string;
    secondaryClassName?: string;
    showSecondary?: boolean;

    badges?: RegionBadge[];

    className?: string;
}

export const RegionCallout: React.FC<RegionCalloutProps> = ({
    region,
    layout,
    primaryValue,
    primaryUnit,
    secondaryValue,
    secondaryClassName,
    showSecondary,
    badges = [],
    className
}) => {
    return (
        <div
            className={clsx('callout static w-full lg:w-[270px] xl:absolute', className)}
            style={{
                left: layout.left,
                top: layout.top
            }}
            data-anchor={layout.anchor}>
            <div className='flex items-start gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 lg:gap-4 lg:px-6'>
                <Image src={region.icon} alt={region.name} width={100} height={100} className='h-10 w-9' />

                <div className='flex flex-col'>
                    <div className='text-xs font-medium text-slate-900 sm:text-sm'>{region.name}</div>

                    {primaryValue && (
                        <div className='mt-1 text-xl font-bold lg:text-2xl'>
                            {primaryValue} {primaryUnit && <span className='text-base font-bold'>{primaryUnit}</span>}
                        </div>
                    )}

                    <div className='mt-2 flex items-center gap-2'>
                        {showSecondary && secondaryValue && (
                            <p className={clsx('text-sm font-medium', secondaryClassName)}>{secondaryValue}</p>
                        )}

                        {badges.map((badge, index) => (
                            <div
                                key={index}
                                className={clsx(
                                    'inline-flex w-fit items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold',
                                    badge.className
                                )}>
                                {badge.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
