import { Search, SlidersHorizontal } from 'lucide-react'
import React from 'react'

export default function HeaderInput() {
    return (
        <div className="w-full px-4 bg-white rounded-lg overflow-hidden border border-[color:var(--primary)] flex justify-end items-center relative">
            <button>
                <Search />
            </button>
            <input
                className="py-4 px-3 outline-none w-full"
            />
            <button>
                <SlidersHorizontal />
            </button>
        </div>
    )
}
