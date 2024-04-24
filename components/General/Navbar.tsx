import { navbarItems } from '@/constants/navbar'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { cn } from '@/lib/utils'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './Sheet'

export default function Navbar({ className }: { className?: string; }) {
    return (
        <nav className={cn('py-5 flex justify-between items-cetner', className)}>
            <Logo />
            <div className='hidden items-center gap-x-7  md:flex'>
                {
                    navbarItems.map((e, idx) => <Link className=' hover:underline' href={e.link} key={idx}>
                        {e.name}
                    </Link>)
                }
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <button><Menu /></button>
                </SheetTrigger>
                <SheetContent side={'left'} className='bg-white'>
                    <SheetHeader className='mb-6'>
                        <SheetTitle className=' text-center'>الاختيارات</SheetTitle>
                    </SheetHeader>
                    <div className='items-center gap-x-7 flex flex-col w-full gap-3'>
                        {
                            navbarItems.map((e, idx) => <Link className='text-center w-full hover:underline' href={e.link} key={idx}>
                                {e.name}
                            </Link>)
                        }
                    </div>

                </SheetContent>
            </Sheet>

        </nav>
    )
}
