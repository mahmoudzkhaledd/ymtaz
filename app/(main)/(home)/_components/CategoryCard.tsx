

import { Category } from '@/types/Categories'
import Link from 'next/link'

import React from 'react'
import { z } from 'zod'

export default function CategoryCard({ ...props }: z.infer<typeof Category>) {
  return (
    <Link href={'/lawyers'} className=' p-9 aspect-square rounded-2xl group shadow-md flex flex-col gap-4 bg-white hover:bg-gradient-to-tl from-[#867955] to-[var(--primary)] text-black hover:text-white '>
      <div className='flex items-center justify-center rounded-full m-auto shadow-lg shadow-[color:#F9DAD5] p-3 mb-3  aspect-square group-hover:bg-gradient-to-tl from-[#8a763f] to-[var(--primary)]'>
        <img
          src={props.image}
          className=' w-[70px] rounded-full aspect-square'
        />
        {/* <Icon className=' fill-[var(--primary)] group-hover:fill-white w-[30px] p-0 m-auto' /> */}
      </div>
      <h5 className='text-inherit text-center font-semibold'>{props.title}</h5>
      <p className='text-inherit text-center text-sm '> متوفر عدد {` ${props.lawyers_count}`}</p>
    </Link>
  )
}
