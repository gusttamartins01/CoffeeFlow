import { Clock, Mail, MapPinned } from 'lucide-react';
import {
	FaEnvelopeOpenText,
	FaInstagram,
	FaLinkedin,
	FaWhatsapp
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

export default function Footer() {
	const scrollToSection = (id: string) => () => {
		document.getElementById(id)?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<footer className="relative w-full overflow-hidden bg-amber-950">
			<div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/30 to-transparent pointer-events-none" />

			<div className="mx-auto max-w-full grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.25fr] px-4 pb-12 pt-12 md:px-16 gap-12">
				<div className="w-80 md:w-140 flex flex-col">
					<Link
						to="/"
						onClick={() => {
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
						className="inline-block cursor-pointer animate-pulse"
					>
						<img
							src={logoImg}
							alt="oioioioi"
							width={80}
							height={80}
							className="object-contain h-auto w-20 md:w-22"
						/>
					</Link>

					<p className="text-amber-600 text-lg font-normal pt-5 mx-2 md:px-0">
						Acreditamos que os melhores momentos começam com pequenos prazeres.
						Cada café é um convite para desacelerar, aproveitar e saborear a
						vida com mais carinho.
					</p>

					<div className="flex gap-6 px-3 pt-8">
						<div className="flex items-center justify-center bg-amber-800/70 hover:bg-amber-700/80 h-14 w-14 rounded-full">
							<FaWhatsapp size={25} className="text-amber-400" />
						</div>

						<div className="flex items-center justify-center bg-amber-800/70 hover:bg-amber-700/80 h-14 w-14 rounded-full">
							<FaInstagram size={25} className="text-amber-400" />
						</div>

						<div className="flex items-center justify-center bg-amber-800/70 hover:bg-amber-700/80 h-14 w-14 rounded-full">
							<FaLinkedin size={25} className="text-amber-400" />
						</div>

						<div className="flex items-center justify-center bg-amber-800/70 hover:bg-amber-700/80 h-14 w-14 rounded-full">
							<FaEnvelopeOpenText size={25} className="text-amber-400" />
						</div>
					</div>
				</div>

				<div className="flex flex-col px-3 gap-5 justify-center">
					<h3 className="inline text-lg font-bold text-amber-600">
						Feito para você
					</h3>

					<Link
						to="/"
						onClick={scrollToTop}
						className="font-normal text-amber-600/90 hover:text-gray-100/80"
					>
						Início
					</Link>

					<Link
						to="/#about"
						onClick={scrollToSection('about')}
						className="font-normal text-amber-600/90 hover:text-gray-100/80"
					>
						Sobre
					</Link>

					<Link
						to=""
						onClick={scrollToSection('menu')}
						className="font-normal text-amber-600/90 hover:text-gray-100/80"
					>
						Cardápio
					</Link>
				</div>

				<div className="flex w-full flex-col px-3 gap-5 justify-center">
					<h3 className="inline text-lg font-bold text-amber-600">
						Sabor que acolhe
					</h3>

					<Link
						to=""
						onClick={scrollToSection('menu')}
						className="font-normal text-amber-600/90 hover:text-gray-100/80"
					>
						Serviços
					</Link>

					<Link
						to=""
						onClick={scrollToSection('space')}
						className="font-normal text-amber-600/90 hover:text-gray-100/80"
					>
						O Espaço
					</Link>

					<Link
						to=""
						onClick={scrollToSection('contact')}
						className="font-normal text-amber-600/90 hover:text-gray-100/80"
					>
						Contatos
					</Link>
				</div>

				<div className="flex flex-col w-full px-3 gap-3 justify-center">
					<h3 className=" text-lg font-bold text-amber-600 ">Fale conosco</h3>

					<div className="flex flex-col gap-3">
						<Link
							to="#"
							className="flex gap-5 font-normal text-amber-600/90 hover:text-gray-100/80"
						>
							<Mail size={20} className="text-amber-500/80" />
							E-mail
						</Link>

						<Link
							to="#"
							className="flex gap-5 font-normal text-amber-600/90 hover:text-gray-100/80"
						>
							<Clock size={20} className="text-amber-500/80" />
							08h às 20h
						</Link>

						<Link
							to="#"
							className="flex gap-5 font-normal text-amber-600/90 hover:text-gray-100/80"
						>
							<MapPinned size={25} className="text-amber-500/80" />
							Fortaleza, Ceará
						</Link>
					</div>
				</div>
			</div>

			<div className="border-t border-amber-400/10">
				<div className="mx-auto flex max-w-full gap-3 px-6 py-5 text-sm text-amber-600 sm:px-8 justify-center md:justify-start md:items-center lg:px-10">
					<p className="hover:text-amber-500 font-bold">
						© {new Date().getFullYear()} Coffeer. Todos os direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
