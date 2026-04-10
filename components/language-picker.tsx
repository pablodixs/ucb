'use client'

import brazilFlag from '@/public/images/svg/brazil-flag.svg'
import ukFlag from '@/public/images/svg/brazil-flag.svg'
import { CaretDownIcon } from '@phosphor-icons/react'
import Image from 'next/image'

interface LanguagePickerProps {
    language: 'eng' | 'por' | 'esp'
}

export function LanguagePicker({ language = 'por' }: LanguagePickerProps) {
    return (
        <button className="flex gap-1 font-semibold text-sm items-center hover:text-secondary transition-colors">
            <span>{language.toUpperCase()}</span>
            {language === 'por' ? (
                <Image alt="Português" src={brazilFlag} height={20} />
            ) : (
                <Image alt="English" src={ukFlag} height={20} />
            )}
            <CaretDownIcon weight="bold" />
        </button>
    )
}
