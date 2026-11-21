import { Link } from 'react-router-dom';
import bgHero from '../../assets/sectionsImg/bgHero.png';

export default function Hero() {
	return (
		<section
			className="relative w-full min-h-screen bg-cover bg-position-[right_-310px_center]  md:bg-center bg-no-repeat shadow-2xl pt-2 md:pt-0 pb-2 md:pb-5"
			style={{ backgroundImage: `url(${bgHero})` }}
		>
			<div className="pointer-events-none absolute inset-0 bg-black/30" />

			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-gray-950 to-transparent" />

			<div className="relative z-10 flex min-h-screen px-5 md:px-20 flex-col items-start justify-center gap-3 bg-black/20">
				<span className="text-lg md:text-2xl font-medium text-gray-300 animate-pulse">
					O sabor que transforma seu momento
				</span>

				<h1 className="max-w-2xl text-gray-200 text-4xl md:text-7xl font-bold">
					Seu momento especial começa com um bom café.
				</h1>

				<p className="max-w-2xl text-xl text-gray-200 font-medium">
					Descubra sabores irresistíveis para acompanhar seus melhores momentos.
				</p>

				<div className="flex items-center justify-center text-center gap-5 pt-5">
					<Link
						to=""
						className="flex items-center justify-center bg-amber-700 hover:bg-amber-900 h-14 w-40 rounded-2xl text-gray-200 font-medium transition duration-500 ease-in-out hover:scale-105"
					>
						Ver cardápio
					</Link>

					<Link
						to=""
						className="flex items-center justify-center bg-amber-700 hover:bg-amber-900 h-14 w-40 rounded-2xl text-gray-200 font-medium transition duration-500 ease-in-out hover:scale-105 "
					>
						Fazer pedido
					</Link>
				</div>
			</div>
		</section>
	);
}
