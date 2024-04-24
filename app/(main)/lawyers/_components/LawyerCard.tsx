

import { Icons } from '@/components/General/Icons'
import { Category } from '@/types/Categories'
import { lawyerDataSchema } from '@/types/lawyer'
import { Star } from 'lucide-react'
import Link from 'next/link'

import React from 'react'
import { z } from 'zod'

export default function LawyerCard({ ...props }: z.infer<typeof lawyerDataSchema>) {
  return (
    <Link href={`/lawyers/${props.id}`} className=' p-9 aspect-square rounded-2xl group shadow-md flex flex-col gap-4 bg-white hover:bg-gradient-to-tl from-[#867955] to-[var(--primary)] text-black hover:text-white '>
      <div className='flex items-center justify-center rounded-full m-auto shadow-lg shadow-[color:#F9DAD5] p-3 mb-3  aspect-square group-hover:bg-gradient-to-tl from-[#8a763f] to-[var(--primary)]'>
        <img
          src={props.photo}
          className=' w-[70px] rounded-full aspect-square'
        />
        {/* <Icon className=' fill-[var(--primary)] group-hover:fill-white w-[30px] p-0 m-auto' /> */}
      </div>
      <h5 className='text-inherit text-center font-semibold'>{props.name}</h5>
      <div className='flex items-center justify-center text-[#2C4768] gap-2'>
        <span>مستشار قانوني</span>
        <Icons.crown className='w-5 fill-[var(--primary)]' />
      </div>
      <div className='flex items-center justify-center gap-2'>
        <Star className='w-4' />
        <p className=' text-[#2C4768] group-hover:text-[#FFFFFF]'>
          <span>4.56 </span>
          <span>(38) مراجعة</span>
        </p>
      </div>
    </Link>
  )
}
