import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../ui/contactStyled/ContactForm';

export default function Contact() {
	return (
		<section
			id="contact"
			className="scroll-mt-24 w-full h-auto pt-10 pb-14 md:pb-20 bg-gray-100 border-b-2 border-gray-400/20"
		>
			<div className="mx-5 md:mx-10 md:mt-5 flex items-center justify-start text-center">
				<h1 className="border-l-4 border-yellow-800 rounded-t-2xl pb-1 pl-5 pt-3 md:pt-5 text-amber-800 text-2xl md:text-5xl font-bold">
					Faça o seu pedido
				</h1>
			</div>

			<div className="mx-5 mt-10 grid grid-cols-1 gap-8 md:mx-10 md:grid-cols-2 md:gap-10">
				<div className="flex flex-col justify-center rounded-2xl border border-amber-900/10 bg-amber-50/80 p-6 text-amber-950 shadow-sm md:p-10">
					<h2 className="text-2xl font-bold md:text-3xl">Vamos conversar?</h2>
					<p className="mt-3 text-amber-900/70">
						Tem alguma dúvida ou sugestão? Estamos por aqui. Acompanhe também
						nossas redes sociais.
					</p>

					<div className="mt-8 flex flex-col gap-4">
						<div className="flex items-center gap-4 rounded-xl border border-amber-900/10 bg-white/70 p-4 transition-colors hover:bg-white">
							<FaInstagram
								size={24}
								className="text-amber-800"
								aria-hidden="true"
							/>
							<span>Instagram</span>
						</div>
						<div className="flex items-center gap-4 rounded-xl border border-amber-900/10 bg-white/70 p-4 transition-colors hover:bg-white">
							<FaWhatsapp
								size={24}
								className="text-amber-800"
								aria-hidden="true"
							/>
							<span>WhatsApp</span>
						</div>
						<div className="flex items-center gap-4 rounded-xl border border-amber-900/10 bg-white/70 p-4 transition-colors hover:bg-white">
							<FaLinkedin
								size={24}
								className="text-amber-800"
								aria-hidden="true"
							/>
							<span>LinkedIn</span>
						</div>
					</div>
				</div>

				<ContactForm />
			</div>
		</section>
	);
}
