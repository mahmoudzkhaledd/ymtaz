import { searchLawyers } from '@/Services/SearchLawyers';
import HomePageHeader from '@/components/General/PageHeader'
import React from 'react'
import LawyerCard from './_components/LawyerCard';
import NotFoundComponent from '@/components/General/NotFoundComponent';

export default async function LaywersPage() {
    const res = await searchLawyers();
    if (res == null) {
        return <NotFoundComponent
            title="هناك خطأ"
            subTitle="الرجاء العودة في وقت لاحق"
        />
    }
    return (
        <main className=" size-full flex flex-col items-center">
            <HomePageHeader title={"نتائج الفلتر"} />
            <div className="mt-6 grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    res.map((e, idx) => <LawyerCard key={idx} {...e} />)
                }
            </div>
        </main>
    )
}
