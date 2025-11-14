'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { menuItems } from '@/data/menu-items';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Transition } from '@headlessui/react';

import Container from './container';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='fixed top-0 right-0 left-0 z-50 mx-auto w-full bg-white shadow-sm md:absolute'>
            <Container className='max-w-full! px-0!'>
                <nav className='bg-primary-950 flex items-center justify-between gap-4 p-4'>
                    <div className='flex items-center justify-between transition-all ease-out lg:gap-10 xl:gap-32'>
                        {/* Kiri: Logo + Judul */}
                        <div className='flex min-w-0 items-center gap-2 justify-self-start sm:gap-3'>
                            <Link href='/' className='flex shrink-0 items-center gap-2'>
                                <Image
                                    src='/images/kalimantan-utara-logo.png'
                                    alt='Logo'
                                    width={100}
                                    height={100}
                                    className='h-10 w-8 sm:h-12 sm:w-9'
                                    style={{ height: 'auto' }}
                                />
                            </Link>

                            <div className='flex min-w-0 flex-col'>
                                <div className='truncate text-sm font-bold sm:text-base'>
                                    DASHBOARD HARGA DAN PASOKAN PANGAN
                                </div>
                                <span className='truncate text-xs font-medium text-gray-600 sm:text-sm'>
                                    Provinsi Kalimantan Utara
                                </span>
                            </div>
                        </div>

                        {/* Tengah: Menu (selalu center visual) */}
                        <ul className='hidden space-x-6 justify-self-center rounded-full border px-7 py-2.5 lg:flex'>
                            {menuItems.map((item) => (
                                <li
                                    key={item.text}
                                    className='hover:text-primary flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors ease-in'>
                                    {item.icon}
                                    <Link href={item.url} className='font-medium transition-colors'>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Kanan: Login */}
                    <Link href='/' className='hidden justify-end lg:flex'>
                        <Button className='rounded-full px-5 py-5'>Login</Button>
                    </Link>
                    {/* Mobile Menu Button */}
                    <div className='flex items-center lg:hidden'>
                        <button
                            onClick={toggleMenu}
                            type='button'
                            className='text-primary flex cursor-pointer items-center justify-center focus:outline-none'
                            aria-controls='mobile-menu'
                            aria-expanded={isOpen}>
                            {isOpen ? (
                                <X className='h-7 w-7 text-slate-700' aria-hidden='true' />
                            ) : (
                                <Menu className='h-7 w-7 text-slate-700' aria-hidden='true' />
                            )}
                            <span className='sr-only'>Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter='transition ease-out duration-200 transform'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-75 transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <div id='mobile-menu' className='rounded-b-xl shadow-sm xl:hidden'>
                    <ul className='flex flex-col space-y-5 px-4 pt-4 pb-6'>
                        {menuItems.map((item) => (
                            <li
                                key={item.text}
                                className='hover:text-primary flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors ease-in'>
                                {item.icon}
                                <Link href={item.url} className='font-medium transition-colors'>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            {/* Kanan: Login */}
                            <Link href='/' className='w-full'>
                                <Button className='w-full rounded-full px-5 py-5.5'>Login</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Navbar;
