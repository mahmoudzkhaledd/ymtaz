import React from 'react'
import PersonalInfo from './_components/PersonalInfo'
import Introduction from './_components/Introduction'
import CustomerRatings from './_components/CustomerRatings'
import BookingInformation from './_components/BookingInformation'
import { getLawyerProfile } from '@/Services/GetLawyer'
import NotFoundComponent from '@/components/General/NotFoundComponent'

export default async function LawyersPage({ params }: { params: { id: string; } }) {
  const res = await getLawyerProfile(params.id);
  if (res == null) {
    return <NotFoundComponent
      title='لم يتم العثور على المحامي'
      subTitle='الرجاء التأكد من البيانات واعادة المحاولة'
    />
  }
  return (
    <div className=' size-full gap-8 grid grid-cols-1 lg:grid-cols-2'>
      <div className='w-full space-y-5'>
        <PersonalInfo image={res.photo} name={res.name} />
        <Introduction about={res.about} />
        <CustomerRatings />
      </div>
      <BookingInformation services={res.services} />
    </div>
  )
}
