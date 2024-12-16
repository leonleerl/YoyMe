"use client";
import { Link, Flex, Select } from '@radix-ui/themes';


import React from 'react'


export function Rightside() {

  return (
    <>
    <Flex align={'center'} gap={'2'}>
        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
        <Select.Root defaultValue="sc">
        <Select.Trigger />
        <Select.Content>
            <Select.Group>
                <Select.Item value="sc">简体中文</Select.Item>
                <Select.Item value="tc">繁體中文</Select.Item>
                <Select.Item value="en">English</Select.Item>
                <Select.Item value="jp">日本語</Select.Item>
            </Select.Group>
        </Select.Content>
        </Select.Root>
        <a href={'#'}>
          <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        </a>
    </Flex>
    </>
  )
}

