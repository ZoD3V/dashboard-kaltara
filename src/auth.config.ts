// auth.config.ts
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/sign-in' // halaman login kamu
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const protectedRoutes = ['/dashboard'];

            if (!isLoggedIn && protectedRoutes.includes(nextUrl.pathname)) {
                return Response.redirect(new URL('/sign-in', nextUrl));
            }

            if (isLoggedIn && nextUrl.pathname.startsWith('/sign-in')) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;
