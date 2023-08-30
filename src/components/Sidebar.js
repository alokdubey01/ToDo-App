import React from 'react'
import { BiShoppingBag, BiLogOut } from 'react-icons/bi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { GoStack } from 'react-icons/go'
import { FiSettings } from 'react-icons/fi'
import { LuLayoutDashboard } from 'react-icons/lu'

export default function Sidebar() {
    const menuItems = [
        {
            title: "Dashboard",
            icon: <LuLayoutDashboard />,
            link: "/dashboard",
        },
        {
            title: "Users",
            icon: <HiOutlineUserGroup />,
            link: "/users",
        },
        {
            title: "Products",
            icon: <BiShoppingBag />,
            link: "/products",
        },
        {
            title: "Categories",
            icon: <GoStack />,
            link: "/categories",
        },
        {
            title: "Settings",
            icon: <FiSettings />,
            link: "/settings",
        },
        {
            title: "Logout",
            icon: <BiLogOut />,
            link: "/logout",
        },
    ];
    return (
        <>
            <div className="flex flex-col w-14 hover:w-64 md:w-64 h-screen text-[#4f5f7b] transition-all duration-300 border-r-2 border-indigo-100 z-10 sidebar">
                <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className="relative flex flex-row gap-3 text-xl items-center h-11 focus:outline-none pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        {item.icon}
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">{item.title}</span>
                                </a>
                            </li>))}
                    </ul>
                </div>
            </div>
        </>
    )
}
