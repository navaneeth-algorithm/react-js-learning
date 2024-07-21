"use client";  // This directive makes sure the component is treated as a client component

import Link from 'next/link'
import { usePathname } from "next/navigation";

import React from 'react'
import { VscHome,VscDashboard,VscAccount,VscFiles,VscSettings,VscTasklist } from "react-icons/vsc";


const Navbar = () => {
    const pathname = usePathname();

    const links = [
        {href:'/',label:'Home',icon:<VscHome/>},
        {href:'/dashboard',label:'Dashboard',icon:<VscDashboard/>},
        {href:'/categories',label:'Categories',icon:<VscTasklist/>},
        {href:'/users',label:'Users',icon:<VscAccount/>},
        {href:'/files',label:'Files',icon:<VscFiles/>},
        {href:'/settings',label:'Settings',icon:<VscSettings/>}
    ];

    const renderLinks = links.map((link)=>{

        return (
            <li key={link.href}>
                <Link className={`link ${pathname===link.href?'active':''}`} href={link.href}>
                {link.icon}
                {link.label}
                </Link>
            </li>
        );
    })
  return (
    <nav className="flex items-start">
        <ul className="flex flex-col space-y-4 mx-3">
            {renderLinks}
        </ul>
    </nav>
  )
}

export default Navbar