import React from 'react'
import {FollowMe, Navbar} from './index';
import { Separator } from '@radix-ui/themes';

export function Leftside() {
  return (
    <>
        <Navbar></Navbar>
        <Separator size={"4"} className='my-4' ></Separator>
        <FollowMe></FollowMe>
    </>
  )
}

