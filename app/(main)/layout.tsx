import Navbar from '@/components/General/Navbar'
import React from 'react'

export default function MailLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className='px-[30px] lg:px-[70px] size-full'>
            <Navbar className='mb-7'/>
            {children}
        </section>
    )
}
