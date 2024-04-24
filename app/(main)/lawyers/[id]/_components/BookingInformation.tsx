"use client"
import { cn } from '@/lib/utils';
import { serviceSchema } from '@/types/lawyer';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import React, { useState } from 'react'
import { z } from 'zod';
function DateCard({ title, dates, }: { title: string; dates: string[], }) {
  const [selected, setSelected] = useState<number>(-1);
  return <div className='w-full rounded-lg bg-[#F9F9F9] h-full'>
    <div className=' rounded-t-lg bg-[var(--primary)] p-3'>
      <p className=' text-center text-white font-semibold text-lg'>{title}</p>
    </div>
    <div className='p-4 h-full mt-4'>
      {
        dates.length == 0 && <div className='size-full flex  justify-center'>
          <p className=' text-[#A3A4A5]'>لا يوجد مواعيد متاحة</p>
        </div>
      }
      <div className=' space-y-3 flex flex-col'>
        {
          dates.map((e, idx) => <button onClick={() => setSelected(idx)} key={idx}
            className={cn('truncate text-[#A3A4A5] font-semibold mx-auto rounded-lg px-3 py-1 text-center w-full', {
              "bg-[var(--primary)] text-white": selected == idx,
            })}>
            <p className=' truncate'>{e}</p>
          </button>)
        }
      </div>
    </div>
  </div>
}

function ServiceCard({ service }: { service: z.infer<typeof serviceSchema> }) {
  return <div className='p-5 bg-[#F9F9F9] rounded-md mx-auto'>
    <div className='flex justify-between'>
      <div className='flex flex-1 gap-3'>
        <Phone />
        <div className=' space-y-2'>
          <p className=' font-semibold text-[#2C4768]'>{service.title}</p>
          <p className=' text-[#B0B0B0] text-balance'>{service.intro}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <p className='font-semibold text-[#2C4768]'>سعر الخدمة</p>
        <p className=' text-[var(--primary)] text-lg'>
          <span className=' text-inherit'>{service.ymtaz_price} </span>
          <span className=' text-inherit'>ر.س</span>
        </p>
      </div>
    </div>
    <button className=' bg-[var(--primary)] py-3 w-full text-center text-white rounded-lg font-semibold mt-7'>
      طلب الخدمة
    </button>
  </div>
}


function WorkingTimes() {
  return <div className=' size-full flex justify-between gap-4 items-center '>
    <button className=' aspect-square w-fit p-1 rounded-lg bg-[var(--primary)]  flex items-center justify-center text-white'>
      <ArrowRight className='w-6' />
    </button>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4'>
      <DateCard title='اليوم' dates={[]} />
      <DateCard title='غدا' dates={[
        "10:00 ص",
        "10:30 ص",
        "11:00 ص",
        "11:30 ص",
        "11:30 ص",
        "11:30 ص",
      ]} />
      <DateCard title='الاثنين' dates={[
        "10:00 ص",
        "10:30 ص",
        "11:00 ص",
        "11:30 ص",
        "11:30 ص",
        "11:30 ص",
      ]} />
    </div>
    <button className=' aspect-square w-fit p-1 rounded-lg bg-[var(--primary)]  flex items-center justify-center text-white'>
      <ArrowLeft className='w-6' />
    </button>
  </div>
}

export default function BookingInformation({ services }: { services: z.infer<typeof serviceSchema>[] }) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className='w-full bg-white rounded-md p-12 h-fit'>
      <h2 className=' text-xl font-bold mb-4 text-[#2C4768]'>معلومات الحجز</h2>
      <div className=' mb-8 flex justify-center gap-4 items-center'>
        <button
          className={`px-4 py-2 cursor-pointer ${activeTab === 1 ? 'text-[#2B4868] border-b-2 border-[#2B4868]' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          أسعار الخدمات
        </button>
        <button
          className={`px-4 py-2 cursor-pointer ${activeTab === 2 ? 'text-[#2B4868] border-b-2 border-[#2B4868]' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          أوقات العمل
        </button>
      </div>
      {
        activeTab == 1 && <div className='w-full space-y-4'>
          {
            services.map((e, idx) => <ServiceCard service={e} key={idx} />)
          }
        </div>
      }
      {
        activeTab == 2 && <WorkingTimes />
      }
    </div>
  )
}
