import cardImageTwo from '../../assets/menuImg/cappuccino.png';
import cardImageFour from '../../assets/menuImg/cheeseBread.png';
import cardImageOne from '../../assets/menuImg/coffe.png';
import cardImageThree from '../../assets/menuImg/pancake.png';

import CardMenu from '../ui/cardMenu/CardMenu.tsx';

export default function Offering() {
	return (
		<section
			id="menu"
			className="scroll-mt-24 w-full h-auto pt-10 pb-14 md:pb-20 bg-gray-100 border-b-2 border-gray-400/20"
		>
			<div className="mx-5 md:mx-10 md:mt-5 flex items-center justify-start text-center">
				<h2 className="border-l-4 border-yellow-800 rounded-t-2xl pb-1 pl-5 pt-3 md:pt-5 text-amber-800 text-2xl md:text-5xl font-bold">
					Conheça nosso cardápio
				</h2>
			</div>

			<div className="md:px-5 grid grid-cols-1 md:grid-cols-4">
				<CardMenu
					image={cardImageOne}
					title="Café Espresso"
					description="Café intenso e encorpado, preparado na hora, com aroma marcante e sabor especial para tornar sua pausa ainda mais gostosa."
					price="R$ 6,00"
				/>

				<CardMenu
					image={cardImageTwo}
					title="Cappuccino Cremoso"
					description="Uma combinação deliciosa de café, leite vaporizado e um toque especial de chocolate e canela"
					price="R$ 12,00"
				/>

				<CardMenu
					image={cardImageThree}
					title="Tapioca Nordestina"
					description="Tapioca recheada com carne do sol desfiada e queijo derretido, trazendo o melhor dos sabores regionais."
					price="R$ 16,00"
				/>

				<CardMenu
					image={cardImageFour}
					title="Pão de Queijo"
					description="Tradicional pão de queijo mineiro, com casquinha crocante e interior macio e quentinho."
					price="R$ 7,00"
				/>
			</div>
		</section>
	);
}
