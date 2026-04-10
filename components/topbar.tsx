'use client'

import { CaretUpIcon, InfoIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'
import { LanguagePicker } from './language-picker'

const EXTERNAL_LINKS = [
    { label: 'Somos Católica', href: 'https://www.catolica.edu.br/' },
    { label: 'Biblioteca', href: 'https://biblioteca.catolica.edu.br/' },
    { label: 'Notícias', href: '#' },
    { label: 'Atendimento ao Aluno', href: '#' },
    { label: 'Egresso', href: '#' },
    { label: 'CPA', href: '#' },
    { label: 'Ouvidoria', href: '#' },
    { label: 'Canal de Conduta Ética', href: '#' },
]

export function Topbar() {
    const [isInfoVisible, setIsInfoVisible] = useState(false)

    return (
        <>
            <section
                className={`${isInfoVisible ? 'h-40 py-4' : 'h-0 py-0'} w-full  transition-all duration-300 ease-in-out overflow-hidden border-b-3 border-primary`}
            >
                <div className="max-w-7xl mx-auto flex flex-col h-full">
                    <div className="flex align-baseline gap-2 flex-1">
                        <div className="text-lg bg-primary/20 text-primary p-1 h-max rounded-full aspect-square flex items-center justify-center">
                            <InfoIcon weight="bold" />
                        </div>
                        <div>
                            <h1 className="text-primary font-semibold flex items-center gap-2 mb-1">
                                Informação importante
                            </h1>
                            <p className="text-sm font-medium text-neutral-700">
                                Este não é o site oficial da Universidade
                                Católica. Trata-se de apenas um projeto de
                                estudo e prática de desenvolvimento web, criado
                                por um estudante da instituição. Para acessar o
                                site oficial da Universidade Católica, por
                                favor,{' '}
                                <Link
                                    target="_blank"
                                    href="https://ucb.catolica.edu.br/"
                                    className="font-semibold"
                                >
                                    clique aqui
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                    <footer>
                        <button
                            onClick={() => setIsInfoVisible(false)}
                            className="flex items-center gap-1 px-3 py-2 text-sm rounded bg-neutral-200 text-neutral-700 hover:bg-secondary hover:text-white font-medium transition-colors"
                        >
                            <CaretUpIcon weight="bold" size={16} />
                            <span>Fechar</span>
                        </button>
                    </footer>
                </div>
            </section>
            <div className="border-b border-neutral-100">
                <div className="max-w-7xl mx-auto flex items-center">
                    <div className="flex-1">
                        <button
                            onClick={() => setIsInfoVisible(!isInfoVisible)}
                            className="text-sm font-medium flex gap-1 items-center text-primary hover:text-secondary transition-colors"
                        >
                            <InfoIcon size={18} />
                            <span>Informação importante</span>
                        </button>
                    </div>
                    <ul className="flex gap-6 items-center py-2 text-neutral-600">
                        {EXTERNAL_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    className="text-sm hover:text-secondary"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <LanguagePicker language="por" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
