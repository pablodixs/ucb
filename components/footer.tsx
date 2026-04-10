import { MapPinIcon, PhoneIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

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
                    <div className="flex flex-col items-end">
                        <Image
                            src={'/images/logo-mec.png'}
                            alt="MEC - Ministério da Educação"
                            width={98}
                            height={176}
                        />
                    </div>
                </div>
            </section>
            <section className=" py-6">
                <div className="max-w-7xl mx-auto text-center text-sm">
                    <Image
                        src={'/images/logo-ubec.png'}
                        alt="União Brasileira de Educação Católica"
                        width={180}
                        height={37}
                    />
                    <p>
                        &copy; 2023 Universidade Católica. Todos os direitos
                        reservados.
                    </p>
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
