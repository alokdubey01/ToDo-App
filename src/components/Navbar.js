import React from 'react'
import logo from '../assets/logo.svg'
import { Helmet } from 'react-helmet';

export default function Navbar() {
    const menuItems = [
        {
            title: "Workspaces",
            link: "/workspace",
        },
        {
            title: "Recent",
            link: "/recent",
        },
        {
            title: "Starred",
            link: "/starred",
        },
        {
            title: "More",
            link: "/more",
        }
    ];
    return (
        <div className="flex flex-wrap place-items-center">
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Mrs+Sheppards&display=swap" rel="stylesheet"/>
            </Helmet>
            <section className="relative mx-auto">
                <nav className="flex justify-between bg-white text-black w-screen">
                    <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                        <a className="text-2xl font-bold flex items-center gap-3" href="/">
                            <img className='h-8 w-8' src={logo} alt="todo" />
                            <span style={{fontFamily: "Mrs Sheppards"}}>TODO</span>
                        </a>
                        <ul className="hidden md:flex px-4 mx-auto text-sm font-normal space-x-12">
                            {menuItems.map((item, index) => (
                                <li key={index}><a className="hover:text-gray-600" href={item.link}>{item.title}</a></li>
                            ))}
                        </ul>
                        <div className="hidden xl:flex items-center gap-6">
                            <div className='flex items-center justify-center'>
                                    <div className="w-full border border-slate-400 rounded-md">
                                        <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                                            placeholder="Search" />
                                </div>
                            </div>
                            <a className="flex items-center hover:text-gray-200" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>

                        </div>
                    </div>
                    <a className="navbar-burger self-center mr-12 xl:hidden" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>
                </nav>

            </section>
        </div>
    )
}
