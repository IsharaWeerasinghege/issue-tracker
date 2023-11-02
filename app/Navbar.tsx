'use client';
import React from 'react';
import Link from "next/link";
import {AiFillBug} from "react-icons/ai";
import {usePathname} from "next/navigation";
import classnames from "classnames";


function Navbar() {
    const currentPath = usePathname();

    const links = [
        {
            name: 'Dashboard',
            path: '/',
        },
        {
            name: 'Issues',
            path: '/issues',
        },
    ];

    return (
        <nav
            className={'flex flex-row justify-between items-center p-4 px-6 bg-gray-800 text-white shadow-md'}
        >
            <Link href="/" className={'flex flex-row items-center space-x-4 gap-2 hover:text-gray-400 uppercase font-bold'}>
                <AiFillBug className={'text-2xl hover:text-gray-400'}/>
                Issue Tracker
            </Link>
            <ul
                className={'flex flex-row justify-between items-center space-x-6'}
            >
                {
                    links.map((link, index) => (
                        <li
                            key={index}
                            className={
                            classnames({
                                'text-gray-400': currentPath !== link.path,
                                'text-white': currentPath === link.path,
                                'hover:text-gray-300': true,
                                'cursor-pointer': true,
                                'transition': true,
                                'duration-200': true,
                                'ease-in-out': true,
                            })
                            }
                        >
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;