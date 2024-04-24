import React from 'react'
import { Icons } from './Icons'

export default function FiveStars() {
    return (
        <div className='flex items-center gap-1'>
            {
                [...Array(5)].map((e, idx) =>
                    <Icons.star key={idx} className='w-5 fill-[var(--primary)]' />
                )
            }
        </div>
    )
}