'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem
} from '@/components/ui/sidebar';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';
import { ChevronDown } from 'lucide-react';

export function NavMain({ items = [] }: { items: any[] }) {
    const pathname = usePathname();

    return (
        <SidebarGroup className='px-2 py-0'>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>

            <SidebarMenu>
                {items.map((item) => {
                    const href = typeof item.href === 'string' ? item.href : item.href;
                    const hasChildren = !!item.items && item.items.length > 0;

                    // active state untuk parent & child
                    const isActive = !!href && pathname === href;
                    const isChildActive = hasChildren
                        ? item.items!.some((child) => pathname.startsWith(child.href))
                        : false;

                    // =========================
                    // ITEM TANPA CHILD (default)
                    // =========================
                    if (!hasChildren) {
                        return (
                            <SidebarMenuItem key={href ?? item.title}>
                                <SidebarMenuButton asChild isActive={isActive} tooltip={{ children: item.title }}>
                                    <Link href={href ?? '#'} prefetch>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    }

                    // =========================
                    // ITEM DENGAN CHILD (Master Data)
                    // =========================
                    return (
                        <Collapsible
                            key={item.title}
                            // otomatis kebuka kalau ada child yang aktif
                            defaultOpen={isChildActive}
                            className='group/collapsible'>
                            <SidebarMenuItem>
                                {/* Trigger untuk collapse/expand */}
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton
                                        isActive={isChildActive || isActive}
                                        tooltip={{ children: item.title }}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                        <ChevronDown className='ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180' />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                {/* Konten submenu */}
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items!.map((child) => {
                                            const childActive = pathname === child.href;

                                            return (
                                                <SidebarMenuSubItem key={child.href}>
                                                    <SidebarMenuSubButton asChild isActive={childActive}>
                                                        <Link href={child.href} prefetch>
                                                            <span>{child.title}</span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            );
                                        })}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
