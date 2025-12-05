import Link from 'next/link';

import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';

import { UserInfo } from './user-info';
import { LogOut, Settings } from 'lucide-react';

interface UserMenuContentProps {
    user: any;
}

export function UserMenuContent({ user }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        return Response.redirect(new URL('/sign-in'));
        // cleanup();
        // router.flushAll();
    };

    return (
        <>
            <DropdownMenuLabel className='p-0 font-normal'>
                <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>
            {/* <DropdownMenuSeparator /> */}
            {/* <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link className='block w-full' href={'/'} as='button' prefetch onClick={cleanup}>
                        <Settings className='mr-2' />
                        Settings
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Link className='block w-full' href={'/'} as='button' data-test='logout-button'>
                    <LogOut className='mr-2' />
                    Log out
                </Link>
            </DropdownMenuItem>
        </>
    );
}
