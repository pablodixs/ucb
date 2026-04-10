'use client'

import { Calligraph } from 'calligraph'
import { useEffect, useState } from 'react'

export function OverviewSection() {
    const [bestRank, setBestRank] = useState<string>('100ª')

    useEffect(() => {
        setTimeout(() => {
            setBestRank('4ª')
        }, 1000)
    }, [])

    return (
        <section className="max-w-7xl mx-auto py-14">
            <div className="flex flex-col items-center ">
                <span className="text-5xl font-bold text-primary">
                    <Calligraph>{bestRank}</Calligraph>
                </span>
                <span>Melhor particular do Brasil</span>
            </div>
        </section>
    )
}
