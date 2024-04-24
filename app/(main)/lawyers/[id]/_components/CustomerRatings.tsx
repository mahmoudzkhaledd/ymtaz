import FiveStars from '@/components/General/FiveStars'
import React from 'react'
function RatingCard() {
  return <div className='w-full bg-white px-10 py-10 rounded-md flex flex-col-reverse md:flex-row gap-9 justify-between items-center'>
    <div className='flex flex-col items-center md:items-start text-center md:text-start gap-4'>
      <FiveStars />
      <p className=' text-sm text-[#A3A4A5]'>التقييم العام</p>
      <p className='mb-2 text-sm text-[#A3A4A5]'>“ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية</p>
      <p className=' text-sm text-[#A3A4A5]'>الخميس 3 فبراير 2024</p>
    </div>
    <div className=' gap-3 flex flex-col items-center'>
      <div className='px-5 text-white font-semibold py-2 rounded-xl bg-[var(--primary)]'>
        5
      </div>
      <p className=' text-sm text-[#A3A4A5]'>تقييم الاستشاري</p>
    </div>
  </div>
}
export default function CustomerRatings() {
  return (
    <div className=' space-y-4'>
      <div className='w-full bg-white px-10 py-10 rounded-lg'>
        <h2 className='mb-7 text-lg font-bold'>تقييم العملاء:</h2>
        <div className='flex flex-col-reverse md:flex-row gap-10 md:gap-2 justify-between'>
          <div className=' gap-3 flex flex-col items-center'>
            <FiveStars />
            <p className=' text-sm text-[#A3A4A5]'>التقييم العام</p>
            <p className=' text-sm text-[#A3A4A5]'>من 154 من العملاء </p>
          </div>
          <div className=' gap-3 flex flex-col items-center'>
            <FiveStars />

            <p className=' text-sm text-[#A3A4A5]'>تقييم المنصة </p>
          </div>
          <div className=' gap-3 flex flex-col items-center'>
            <div className='px-5 text-white font-semibold py-2 rounded-xl bg-[var(--primary)]'>
              5 / 5
            </div>
            <p className=' text-sm text-[#A3A4A5]'>تقييم الاستشاري</p>
          </div>
        </div>
      </div>
      <div className=' space-y-1'>
        <RatingCard />
        <RatingCard />
      </div>
    </div>
  )
}
