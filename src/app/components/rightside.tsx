import { Select } from '@radix-ui/themes';
import React from 'react'

function Rightside() {
  return (
    <>
    <div className='flex items-center'>
        <div>语言：</div>
        <Select.Root defaultValue="sc">
        <Select.Trigger />
        <Select.Content>
            <Select.Group>
                <Select.Item value="sc">简体中文</Select.Item>
                <Select.Item value="tc">繁体中文</Select.Item>
                <Select.Item value="en">English</Select.Item>
                <Select.Item value="jp">日本語</Select.Item>
            </Select.Group>
        </Select.Content>
        </Select.Root>
    </div>
    </>
  )
}

export default Rightside;
