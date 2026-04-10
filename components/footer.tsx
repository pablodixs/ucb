import { ArrowUpRightIcon, PhoneIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

import ubecLogo from '../public/images/logo-ubec.png'
import {
    SiFacebook,
    SiInstagram,
    SiTiktok,
    SiYoutube,
} from '@icons-pack/react-simple-icons'

const FOOTER_LINKS_STYLE =
    'text-white hover:text-[#a6afcd] transition-colors underline-offset-2 hover:underline'

export function Footer() {
    return (
        <footer>
            <section className="bg-primary py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-5 gap-4 text-white text-sm">
                    <div>
                        <ul className="flex flex-col gap-3">
                            <strong className="font-semibold text-[#909bc1]">
                                Acesso rápido
                            </strong>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Graduação
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Pós-graduação
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Biblioteca
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Estudante
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <strong className="font-semibold text-[#909bc1]">
                                    A Católica
                                </strong>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Institucional
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Infraestrutura
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Imprensa
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Documentos institucionais
                                </Link>
                            </li>

                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Comissão Própria de Avaliação
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Cátedra UNESCO
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3">
                            <strong className="font-semibold text-[#909bc1]">
                                +Católica
                            </strong>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Ajuda
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Católica de A a Z
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Trabalhe Conosco
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Processo Seletivo
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className={FOOTER_LINKS_STYLE}>
                                    Proteção de Dados Pessoais
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-8">
                            <li>
                                <CampusCard
                                    campusName="Câmpus Taguatinga"
                                    address="QS 07 – Lote 01 – EPCT – Taguatinga, Brasília/DF - CEP: 71966-700"
                                    phone="3356-9000"
                                />
                            </li>
                            <li>
                                <CampusCard
                                    campusName="Câmpus Ceilândia"
                                    address="St. N QNN 31 - Ceilândia, Brasília - DF, 72225-310"
                                    phone="3356-9202"
                                />
                            </li>
                            <li>
                                <CampusCard
                                    campusName="Câmpus Asa Sul"
                                    address="SHIGS 702 - Asa Sul, Brasília - DF, 70330-710"
                                    phone="3356-9000"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-8 items-center">
                        <Image
                            src={'/images/OUVIDORIA_UCB.png'}
                            alt="MEC - Ministério da Educação"
                            width={180}
                            height={37}
                        />
                        <Image
                            src={'/images/logo-mec.png'}
                            alt="MEC - Ministério da Educação"
                            width={98}
                            height={176}
                        />
                    </div>
                </div>
            </section>
            <section className="py-14">
                <div className="max-w-7xl mx-auto">
                    <section className="flex justify-between items-center">
                        <div className="flex gap-12 text-primary">
                            <Link
                                className="hover:opacity-70 transition-all"
                                href={'#'}
                            >
                                <SiInstagram size={28} />
                            </Link>
                            <Link
                                className="hover:opacity-70 transition-all"
                                href={'#'}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    width="30px"
                                    height="30px"
                                    className="fill-primary"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                </svg>
                            </Link>
                            <Link
                                className="hover:opacity-70 transition-all"
                                href={'#'}
                            >
                                <SiFacebook size={28} />
                            </Link>
                            <Link
                                className="hover:opacity-70 transition-all"
                                href={'#'}
                            >
                                <SiYoutube size={28} />
                            </Link>
                            <Link
                                className="hover:opacity-70 transition-all"
                                href={'#'}
                            >
                                <SiTiktok size={28} />
                            </Link>
                        </div>
                        <div className="flex flex-col items-end">
                            <Image
                                src={'/images/full-logo.svg'}
                                alt="União Brasileira de Educação Católica"
                                width={180}
                                height={37}
                                draggable={false}
                            />
                        </div>
                    </section>
                    <div className="flex gap-8 justify-center mt-14">
                        <Link
                            className="font-medium text-primary flex items-center gap-1"
                            href={'#'}
                        >
                            Portal UBEC <ArrowUpRightIcon />
                        </Link>
                        <Link
                            className="font-medium text-primary flex items-center gap-1"
                            href={'#'}
                        >
                            Machado de Assis - Católica EaD <ArrowUpRightIcon />
                        </Link>
                        <Link
                            className="font-medium text-primary flex items-center gap-1"
                            href={'#'}
                        >
                            Católica EaD
                            <ArrowUpRightIcon />
                        </Link>
                        <Link
                            className="font-medium text-primary flex items-center gap-1"
                            href={'#'}
                        >
                            FICR <ArrowUpRightIcon />
                        </Link>
                        <Link
                            className="font-medium text-primary flex items-center gap-1"
                            href={'#'}
                        >
                            UNILESTE
                            <ArrowUpRightIcon />
                        </Link>
                        <Link
                            className="font-medium text-primary flex items-center gap-1"
                            href={'#'}
                        >
                            UNICATÓLICA
                            <ArrowUpRightIcon />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center mt-14 ">
                        <Image
                            src={ubecLogo}
                            alt="União Brasileira de Educação Católica"
                            width={180}
                            height={37}
                            draggable={false}
                        />
                        <p className="text-sm mt-4 text-center">
                            &copy; 2026 Universidade Católica de Brasília. Todos
                            os direitos reservados.
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

const CampusCard = ({
    campusName,
    address,
    phone,
}: {
    campusName: string
    address: string
    phone: string
}) => {
    return (
        <div>
            <strong className="font-medium text-base">{campusName}</strong>
            <hr className="border-white/30 my-1" />
            <p className="flex gap-1 items-center text-[#a6afcd]">{address}</p>
            <p className="flex gap-1 items-center text-[#a6afcd] font-medium">
                <PhoneIcon size={16} weight="fill" /> {phone}
            </p>
        </div>
    )
}
