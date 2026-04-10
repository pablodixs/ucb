import Image from 'next/image'

import logo from '@/public/images/logo-colors.png'
import Link from 'next/link'
import {
    CaretDownIcon,
    MagnifyingGlassIcon,
} from '@phosphor-icons/react/dist/ssr'

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

const NAVBAR_LINKS = [
    { label: 'A Católica', href: '#' },
    { label: 'Cursos', href: '#' },
    { label: 'Pesquisa', href: '#' },
    { label: 'Extensão', href: '#' },
    { label: 'Educadores', href: '#' },
]

export default function Home() {
    return (
        <>
            <div className="bg-neutral-50">
                <div className="max-w-7xl mx-auto justify-end flex items-center">
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
                            <button className="font-semibold text-sm hover:text-secondary flex gap-1 items-center">
                                <span>PT-BR</span>
                                <CaretDownIcon weight="bold" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <header className="bg-white p-6">
                <div className="max-w-7xl mx-auto flex items-center">
                    <Image
                        src={logo}
                        width={200}
                        height={39}
                        alt="Universidade Católica de Brasília"
                    />

                    <nav className="ml-10">
                        <ul className="flex gap-2 items-center">
                            {NAVBAR_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        className="px-4 py-2 font-medium hover:text-secondary"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex-1"></div>
                    <button className="text-xl p-2 hover:text-secondary cursor-pointer transition-colors">
                        <MagnifyingGlassIcon weight="bold" />
                        <span className="sr-only">Buscar</span>
                    </button>
                    <button className="group px-4 py-2 flex gap-1 items-center justify-center cursor-pointer hover:text-secondary transition-colors">
                        <span className="font-medium">UCB Online</span>
                        <CaretDownIcon
                            className="group-hover:rotate-180 transition-transform"
                            weight="bold"
                        />
                    </button>
                    <Link
                        className="px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-secondary ml-auto transition-colors"
                        href={'#'}
                    >
                        Inscreva-se
                    </Link>
                </div>
            </header>
            <main>
                <section>
                    <video
                        src="https://ucb.catolica.edu.br/hubfs/Cat%C3%B3lica%202023%20-%20MEC%20V10%20-%20WIDE%20(full%20HD%20-31%2c1mb).mp4
"
                        muted
                        loop
                        autoPlay
                    ></video>
                </section>
            </main>
        </>
    )
}
