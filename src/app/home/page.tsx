import { Avatar, Text } from '@radix-ui/themes'

import React from 'react'

function Home() {
  return (
    <>
    <div className="relative">
        <img src='/images/chess.JPG' alt="img" className='w-full h-80'></img>
        <Text  className='absolute right-52 -bottom-3 text-black' weight={"bold"} size={"6"}>Leon&apos;s Home Page</Text>
        <Avatar size={"7"} highContrast={true}  src='/images/avatar.JPG' fallback="A" className='absolute rounded-full bg-blue-700 w-24 h-24 right-24 -bottom-12'/>
        </div>
    </>
  )
}

export default Home
