import React from 'react'

export default function Introduction({ about }: { about: string; }) {
  return (
    <div className='w-full bg-white px-10 py-10 rounded-lg'>
      <h2 className='mb-4 text-[#2C4768] font-semibold text-xl'>النبذة التعريفية</h2>
      <p className=' text-[#A3A4A5]'>{about}</p>
    </div>
  )
}
