import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/app/Navbar";
import {Theme} from '@radix-ui/themes';

const inter = Inter({subsets: ['latin']})

import '@radix-ui/themes/styles.css';
import {Toaster} from "react-hot-toast";

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Theme>
            <Navbar/>
            <main className={'p-5'}>
                {children}
            </main>
        </Theme>

        <div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
        </body>
        </html>
    )
}
