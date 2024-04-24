import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo({ to }: { to?: string; }) {
    return (
        <Link href={to ?? '/'}>
            <Image className='w-[90px]' src={'/images/logo.png'} alt='Logo' width={140} height={68} />
        </Link>
    )
}
