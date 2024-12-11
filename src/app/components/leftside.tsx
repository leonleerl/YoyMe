import React from 'react'
import Navbar from './navbar';
import { Separator } from '@radix-ui/themes';

function Leftside() {
  return (
    <>
        <Navbar></Navbar>
        <Separator size={"4"} ></Separator>
    </>
  )
}

export default Leftside;
