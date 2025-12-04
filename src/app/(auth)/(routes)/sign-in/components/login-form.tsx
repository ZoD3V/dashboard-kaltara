'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInCredentials } from '@/lib/action';
import { cn } from '@/lib/utils';

import { Loader2Icon } from 'lucide-react';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
    const [state, formAction, isPending] = React.useActionState(signInCredentials, null);

    return (
        <div className={cn('font-body flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                    {state?.message && <div className='mb-4 text-sm text-red-500'>{state?.message}</div>}
                </CardHeader>
                <CardContent>
                    <div></div>
                    <form action={formAction}>
                        <div className='flex flex-col gap-6'>
                            <div className='grid gap-3'>
                                <Label htmlFor='email'>Email</Label>
                                <Input id='email' type='email' name='email' placeholder='email@example.com' required />
                                <div className='text-sm text-red-500'>{state?.error?.email}</div>
                            </div>
                            <div className='grid gap-3'>
                                <div className='flex items-center'>
                                    <Label htmlFor='password'>Password</Label>
                                </div>
                                <Input id='password' type='password' name='password' required placeholder='password' />
                                <div className='text-sm text-red-500'>{state?.error?.password}</div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                {isPending ? (
                                    <Button disabled>
                                        <Loader2Icon className='animate-spin' />
                                        Loading
                                    </Button>
                                ) : (
                                    <Button type='submit' className='w-full'>
                                        Login
                                    </Button>
                                )}
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
