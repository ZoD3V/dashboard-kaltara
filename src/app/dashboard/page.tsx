import { ChartAreaInteractive } from '@/components/chart-area-interactive';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Heading from '@/components/ui/heading';
import { SectionCards } from '@/components/ui/section-cards';

const breadcrumbs = [
    {
        title: 'Dashboard',
        href: '/'
    }
];

export default async function AdminPage() {
    return (
        <div className='flex flex-col'>
            <div className='flex-1 space-y-4 px-4 py-8 pt-6'>
                <Heading title='Dashbord' description='Overview of your dashboard' />
                <SectionCards />
            </div>
        </div>
    );
}
