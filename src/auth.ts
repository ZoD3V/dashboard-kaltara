import { authConfig } from '@/auth.config';

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { auth, handlers, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                if (!credentials) return null;

                const { email, password } = credentials as {
                    email?: string;
                    password?: string;
                };

                if (email === 'admin@gmail.com' && password === 'admin@1234') {
                    return {
                        id: '1',
                        name: 'Administrator',
                        email: 'admin@example.com',
                        role: 'admin'
                    };
                }

                // selain itu gagal login
                return null;
            }
        })
    ],
    session: { strategy: 'jwt' }
});
