import communityImageOne from '../../assets/communityImg/space1.png';
import communityImageTwo from '../../assets/communityImg/space2.png';
import communityImagethree from '../../assets/communityImg/space3.png';
import communityImageFour from '../../assets/communityImg/space4.png';
import communityImageFive from '../../assets/communityImg/space5.png';

import CardCommunity from '../ui/cardCommunity/CardCommunity';

export default function Community() {
	return (
		<section
			id="space"
			className="scroll-mt-24 w-full h-auto pt-10 pb-14 md:pb-20 bg-gray-100 border-b-2 border-gray-400/20"
		>
			<div className="mx-5 md:mx-10 md:mt-5 flex items-center justify-start text-center">
				<h2 className="border-l-4 border-yellow-800 rounded-t-2xl pb-1 pl-5 pt-3 md:pt-5 text-amber-800 text-2xl md:text-5xl font-bold">
					Um espaço feito para você
				</h2>
			</div>

			<div className="md:mx-5 grid grid-cols-1 md:grid-cols-5">
				<CardCommunity
					image={communityImageOne}
					title="Balcão & Café"
					content="O sabor começa aqui"
					description="Um espaço para preparar cafés e receber você com carinho."
				/>

				<CardCommunity
					image={communityImageTwo}
					title="Espaço Conexão"
					content="Estude, trabalhe e aproveite"
					description="Conforto ideal para estudar, trabalhar e fazer uma pausa."
				/>

				<CardCommunity
					image={communityImagethree}
					title="Cantinho da Janela"
					content="Aprecie cada momento"
					description="Aproveite seu café com luz natural e tranquilidade."
				/>

				<CardCommunity
					image={communityImageFour}
					title="Varanda Aconchegante"
					content="Respire e relaxe"
					description="Um ambiente ao ar livre para relaxar e conversar."
				/>

				<CardCommunity
					image={communityImageFive}
					title="Refúgio do Café"
					content="Seu cantinho especial"
					description="Um cantinho acolhedor para aproveitar bons momentos."
				/>
			</div>
		</section>
	);
}
