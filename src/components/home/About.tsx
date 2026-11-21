import { Coffee, Croissant } from 'lucide-react';
import aboutImg from '../../assets/sectionsImg/teste.png';

export default function About() {
	return (
		<section
			id="about"
			className="scroll-mt-24 w-full h-auto pt-10 pb-14 md:pb-20 bg-gray-100 border-b-2 border-gray-400/20"
		>
			<div className="mx-5 md:mx-10 md:mt-5 flex items-center justify-start text-center">
				<h2 className="border-l-4 border-yellow-800 rounded-t-2xl pb-1 pl-5 pt-3 md:pt-5 text-amber-800 text-2xl md:text-5xl font-bold">
					Nossa História
				</h2>
			</div>

			<div className="px-2 md:px-0 mt-10 md:mt-16 mx-4 md:mx-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
				<div className="flex items-center justify-center w-full">
					<img
						src={aboutImg}
						alt="Imagem de um capuccino e um pão de queijo."
						className="rounded-3xl h-80 md:h-100 w-150"
					/>
				</div>

				<div className="flex flex-col w-full justify-center items-center gap-3">
					<h3 className="flex gap-3 items-center text-2xl md:text-3xl text-amber-900 font-bold border-b-4 border-amber-900 rounded-md pt-3 pb-4">
						<Croissant size={35} className="text-amber-900 font-extrabold" />
						Momentos com sabor
						<Coffee size={35} className="text-amber-900 font-extrabold" />
					</h3>

					<p className="mt-5 md:mt-5 text-center  text-amber-900 text-lg md:text-2xl font-normal">
						O café é a essência da nossa cafeteria. Cada xícara é preparada com
						cuidado e ingredientes selecionados, valorizando cada aroma e sabor.
						Do espresso tradicional às bebidas especiais, queremos transformar
						sua pausa em um momento único e cheio de sabor.
					</p>

					<p className="mt-3 md:mt-5 text-center text-amber-900 text--lg md:text-2xl font-normal">
						Para acompanhar, oferecemos tapiocas preparadas na hora, lanches
						artesanais e deliciosos acompanhamentos. Tudo isso em um ambiente
						aconchegante e tranquilo, perfeito para estudar, trabalhar, colocar
						a conversa em dia ou simplesmente aproveitar um bom café sem pressa.
					</p>
				</div>
			</div>
		</section>
	);
}
