import Link from 'next/link'
import React from 'react'

export function Navbar() {
  return (
    <>
        <div>
            <Link href={"#"} className='flex items-center mx-4 mt-3 mb-8 space-x-2'>
                <div className='rounded-full w-5 h-5 bg-pink-300'></div>
                <div className='font-semibold text-lg text-black'>
                    Logo
                </div>
            </Link>
            <Link href={"/"} className='flex items-center mx-4 mt-4 space-x-2'>
                <div className='rounded-full w-4 h-4 bg-pink-300'></div>
                <div className='font-semibold text-sm text-black'>
                    主页
                </div>
            </Link>
            <Link href={"/daily"} className='flex items-center mx-4 mt-4 space-x-2'>
                <div className='rounded-full w-4 h-4 bg-pink-300'></div>
                <div className='font-semibold text-sm text-black'>
                    日常
                </div>
            </Link>
            <Link href={"#"} className='flex items-center mx-4 mt-4 space-x-2'>
                <div className='rounded-full w-4 h-4 bg-pink-300'></div>
                <div className='font-semibold text-sm text-black'>
                    专题
                </div>
            </Link>
            <Link href={"#"} className='flex items-center mx-4 mt-4 space-x-2'>
                <div className='rounded-full w-4 h-4 bg-pink-300'></div>
                <div className='font-semibold text-sm text-black'>
                    留言
                </div>
            </Link>
            <Link href={"/about"} className='flex items-center mx-4 mt-4 space-x-2'>
                <div className='rounded-full w-4 h-4 bg-pink-300'></div>
                <div className='font-semibold text-sm text-black'>
                    关于
                </div>
            </Link>
        </div>

    </>
  )
}

