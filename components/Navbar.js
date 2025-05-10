"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname=usePathname()
    const showNavbar=["/","/generate"].includes(pathname)
  return (
    <>
    {showNavbar && <nav className='flex justify-between items-center w-[80vw] fixed top-13 bg-white right-[10vw] rounded-full p-4'>
        <div className="logo flex gap-15 items-center pl-6">
            <Link href="/"><Image alt="lazy" width={120} height={120} src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"></Image></Link>
        <ul className='flex  items-center gap-6'>
            <Link href="/"><li>Products</li></Link>
            <Link href="/"><li>Templates</li></Link>
            <Link href="/"><li>MarketPlace</li></Link>
            <Link href="/"><li>Learn</li></Link>
            <Link href="/"><li>Pricing</li></Link>
        </ul>
        </div>
        <div className='flex gap-2'>
            <button className="login bg-gray-200 px-6 py-4 rounded-lg font-bold">Log in</button>
            <button className="signup bg-black text-white rounded-full px-6 py-4 font-bold">Sign up free</button>
        </div>
    </nav>}
    </>
  )
}

export default Navbar
