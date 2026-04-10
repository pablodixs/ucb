import Link from 'next/link'
import {
    CaretDownIcon,
    MagnifyingGlassIcon,
    ArrowUpRightIcon,
} from '@phosphor-icons/react/dist/ssr'
import { Logo } from '@/components/logo'
import { Topbar } from '@/components/topbar'
import { OverviewSection } from './components/overview-section'

const NAVBAR_LINKS = [
    { label: 'A Católica', href: '#' },
    { label: 'Cursos', href: '#' },
    { label: 'Pesquisa', href: '#' },
    { label: 'Extensão', href: '#' },
    { label: 'Estudantes', href: '#' },
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
                    <nav className="ml-4">
                        <ul className="flex gap-2 items-center">
                            {NAVBAR_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        className="px-4 py-2 font-medium hover:text-secondary transition-colors"
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
                <section className="relative w-full h-[80dvh] overflow-hidden">
                    <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
                        <h1 className="text-6xl font-semibold tracking-tight text-shadow-lg">
                            Onde o futuro <br />
                            <span className="font-monster text-9xl leading-24 tracking-normal font-normal">
                                se forma
                            </span>
                        </h1>
                    </div>
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="https://ucb.catolica.edu.br/hubfs/Cat%C3%B3lica%202023%20-%20MEC%20V10%20-%20WIDE%20(full%20HD%20-31%2c1mb).mp4
"
                        muted
                        loop
                        autoPlay
                    ></video>
                </section>
                <section className="max-w-7xl mx-auto py-14">
                    <p className="text-3xl text-primary tracking-tight font-semibold text-center text-balance">
                        Há mais de 50 anos transformando conhecimento em
                    </p>
                    <p className="text-7xl text-secondary text-center font-monster">
                        propósito.
                    </p>
                    <div className="flex gap-4 items-center justify-center mt-8">
                        <Link
                            className="px-5 py-3 bg-primary text-white font-semibold rounded flex gap-2 items-center"
                            href={'#'}
                        >
                            Quero me inscrever{' '}
                            <ArrowUpRightIcon weight="bold" size={18} />
                        </Link>
                        <Link
                            className="px-5 py-3 text-primary font-medium flex gap-2 items-center"
                            href={'#'}
                        >
                            <MagnifyingGlassIcon weight="bold" size={18} />
                            Conheça os cursos
                        </Link>
                    </div>
                </section>
                <OverviewSection />
            </main>
        </>
    )
}
