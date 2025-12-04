'use client';
import Link from 'next/link';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar';

import AppLogo from './app-logo';
import { NavFooter } from './nav-footer';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';
import { Book, Box, Folder, LayoutGrid, UsersIcon } from 'lucide-react';

const mainNavItems: any[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid
    },
    {
        title: 'Neraca',
        href: '/neraca',
        icon: Book
    },
    {
        title: 'Harga',
        href: '/harga',
        icon: Box
    },
    {
        title: 'Category',
        href: '/dashboard/category',
        icon: Box
    },
    {
        title: 'Master Data',
        href: '/master-data',
        icon: UsersIcon
    }
];

const footerNavItems: any[] = [
    {
        title: 'Vour Repository',
        href: 'https://github.com/ZoD3V',
        icon: Folder
    }
];

export function AppSidebar() {
    return (
        <Sidebar collapsible='icon' variant='floating'>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size='lg' asChild>
                            <Link href={'/dasboard'} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className='mt-auto' />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
