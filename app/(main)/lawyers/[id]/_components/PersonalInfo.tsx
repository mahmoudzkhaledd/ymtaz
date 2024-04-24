import FiveStars from '@/components/General/FiveStars'
import { Icons } from '@/components/General/Icons';
import React from 'react'

export default function PersonalInfo({ ...props }: { name: string; image: string; }) {
  return (
    <div className='w-full bg-white px-10 py-10 rounded-lg'>
      <h2 className='mb-4 text-[#2C4768] font-semibold text-xl'>المعلومات الشخصية</h2>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-5'>
        <div>
          <img className=' rounded-full w-[130px] aspect-square object-cover' src={props.image} />
        </div>
        <div className='flex flex-col gap-4'>
          <h5 className='text-[#2C4768] font-semibold text-center md:text-start'>{props.name}</h5>
          <div className=' flex items-center justify-center md:justify-start gap-1'>
            <span>مستشار قانوني</span>
            <Icons.crown className='w-5 fill-[var(--primary)]' />

          </div>
          <div className='flex flex-col md:flex-row items-center gap-3'>
            <FiveStars />
            <p className=' text-gray-400'> 5.00 </p>
            <p className=' text-gray-400'> التقييم العام من 154 من العملاء </p>
            <p className='text-[#2C4768] cursor-pointer hover:underline'>اظهر التقييمات</p>
          </div>
          <div className=' bg-[color:#F9F9F9] space-y-[40px] rounded-tl-2xl rounded-br-2xl p-5 px-7'>
            <div className='flex'>
              <Icons.quotes className='w-5 inline ml-2' />
              <p className=' text-[color:#A3A4A5]'>
                تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية
              </p>
            </div>
            <div className='flex justify-between gap-3'>
              <FiveStars />
              <p className=' text-sm text-[color:#A3A4A5]'>Abdullah Faleh</p>
              <p className=' text-sm text-[color:#A3A4A5]'>الخميس 3 فبراير 2024</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
