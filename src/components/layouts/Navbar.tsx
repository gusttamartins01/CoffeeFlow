import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navbar() {
	const [mobileMenuopen, setMobileMenuOpen] = useState(false);

	const closeMenu = () => {
		setMobileMenuOpen(false);
	};

	const scrollToSection = (id: string) => () => {
		document.getElementById(id)?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
		closeMenu();
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		closeMenu();
	};

	const getLinksStyle = ({ isActive }: { isActive: boolean }) =>
		isActive
			? 'text-amber-400 font-semibiold items-center font-semibold hover:text-amber-600'
			: 'text-red-600 font-semibiold font-semibold hover:text-red-800';

	return (
		<header className="fixed top-2 md:top-5 left-1/2 -translate-x-1/2 z-50 w-full md:w-[68%] rounded-full border border-white/20 bg-zinc-900/30 px-6 py-2 shadow-lg backdrop-blur-md">
			<div className=" max-w-7xl h-14 px-4 flex items-center justify-between ">
				<NavLink
					to="/"
					onClick={() => {
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
					className="flex items-center transition duration-500 ease-in-out hover:scale-110 cursor-pointer"
				>
					={' '}
					<img
						src={logo}
						width={50}
						height={50}
						alt="Logo CoffeeFlow"
						className="object-contain"
					/>
					=
				</NavLink>

				<div>
					<nav className="items-center gap-6 text-lg font-medium hidden lg:flex">
						<NavLink to="/" onClick={scrollToTop} className={getLinksStyle}>
							Início
						</NavLink>

						<NavLink
							to="/#about"
							onClick={scrollToSection('about')}
							className={getLinksStyle}
						>
							Sobre
						</NavLink>

						<NavLink
							to="/#menu"
							onClick={scrollToSection('menu')}
							className={getLinksStyle}
						>
							Cardápio
						</NavLink>

						<NavLink
							to="/#service"
							onClick={scrollToSection('service')}
							className={getLinksStyle}
						>
							Serviços
						</NavLink>

						<NavLink
							to="/#space"
							onClick={scrollToSection('space')}
							className={getLinksStyle}
						>
							O Espaço
						</NavLink>

						<NavLink
							to="/#contact"
							onClick={scrollToSection('contact')}
							className={getLinksStyle}
						>
							Contatos
						</NavLink>
					</nav>

					<button
						type="button"
						aria-label="Abrir Menu"
						aria-expanded={mobileMenuopen}
						onClick={() => setMobileMenuOpen((prev) => !prev)}
						className="inline-flex items-center justify-center rounded-md p-2 text-amber-600 transition hover:bg-white/5 lg:hidden"
					>
						{mobileMenuopen ? <X size={30} /> : <Menu size={30} />}
					</button>
				</div>

				{mobileMenuopen && (
					<nav className="absolute top-full left-0 w-full mt-2 rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl shadow-xl p-5 lg:hidden">
						<div className="flex flex-col gap-2 px-3 text-base font-medium">
							<NavLink to="/" onClick={scrollToTop} className={getLinksStyle}>
								Início
							</NavLink>

							<NavLink
								to="/#about"
								onClick={scrollToSection('about')}
								className={getLinksStyle}
							>
								Sobre
							</NavLink>

							<NavLink
								to="/#menu"
								onClick={scrollToSection('menu')}
								className={getLinksStyle}
							>
								Cardápio
							</NavLink>

							<NavLink
								to="/#service"
								onClick={scrollToSection('service')}
								className={getLinksStyle}
							>
								Serviços
							</NavLink>

							<NavLink
								to="/#space"
								onClick={scrollToSection('space')}
								className={getLinksStyle}
							>
								O Espaço
							</NavLink>

							<NavLink
								to="/#contact"
								onClick={scrollToSection('contact')}
								className={getLinksStyle}
							>
								Contatos
							</NavLink>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
}
