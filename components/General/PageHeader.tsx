import HeaderInput from '@/components/Elements/HeaderInput'
import React from 'react'

export default function HomePageHeader({ title }: { title: string }) {
    return (
        <div className='flex flex-col items-center w-2/4'>
            <h2 className='mb-6 text-2xl font-bold'>
                {title}
            </h2>
            <HeaderInput />
        </div>
    )
}
