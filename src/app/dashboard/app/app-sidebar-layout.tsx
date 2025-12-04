import { type PropsWithChildren } from 'react';

import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { AppSidebar } from '@/components/ui/app-sidebar';

interface AppSidebarLayoutProps extends PropsWithChildren {
    breadcrumbs?: any[];
}

export default function AppSidebarLayout({ children, breadcrumbs = [] }: AppSidebarLayoutProps) {
    return (
        <AppShell variant='sidebar'>
            <AppSidebar />
            <AppContent variant='sidebar' className='overflow-x-hidden'>
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
