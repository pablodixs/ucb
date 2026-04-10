import Link from 'next/link'
import {
    CaretDownIcon,
    MagnifyingGlassIcon,
} from '@phosphor-icons/react/dist/ssr'
import { Logo } from '@/components/logo'
import { Topbar } from '@/components/topbar'

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
            <Topbar />
            <header className="bg-white p-4">
                <div className="max-w-7xl mx-auto flex items-center">
                    <Link href={'/'}>
                        <Logo />
                    </Link>
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
