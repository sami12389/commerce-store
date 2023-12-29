"use client"
import React from 'react'
import Link from 'next/link'
import {usePathname} from "next/navigation"
import {cn} from "@/lib/utils"
import {Category} from "@/types"

interface MainNavProps{
    data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname()
    const routes = data.map((route)=>({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))
  return (
    <nav className = "mx-6 flex items-center space-x-4 lg:space-x-6">
        {routes.map((route)=>(
            <Link 
            href = {route.href} 
            key = {route.href}
            className = {cn("text-sm font-medium transition-colors hover: text-black",
            route.active ? "text-black" : "text-neutral-500")}
            >
                <a className = {`text-sm font-medium ${route.active ? "text-gray-900" : "text-gray-500 hover:text-gray-900 "}`}>
                    {route.label}
                </a>
            </Link>
        ))}
    </nav>
  )
}

export default MainNav