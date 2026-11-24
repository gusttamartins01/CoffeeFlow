export default function ContactForm() {
	return (
		<form className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-md md:p-8">
			<div>
				<h2 className="text-2xl font-bold text-amber-900">
					Envie uma mensagem
				</h2>
				<p className="mt-2 text-amber-900/70">
					Preencha os campos abaixo e fale com a gente.
				</p>
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="contact-name" className="font-semibold text-amber-950">
					Nome
				</label>
				<input
					id="contact-name"
					name="name"
					type="text"
					autoComplete="name"
					required
					className="rounded-lg border border-amber-900/20 px-4 py-3 text-amber-950 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
					placeholder="Seu nome"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="contact-email" className="font-semibold text-amber-950">
					E-mail
				</label>
				<input
					id="contact-email"
					name="email"
					type="email"
					autoComplete="email"
					required
					className="rounded-lg border border-amber-900/20 px-4 py-3 text-amber-950 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
					placeholder="seuemail@exemplo.com"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label
					htmlFor="contact-message"
					className="font-semibold text-amber-950"
				>
					Mensagem
				</label>
				<textarea
					id="contact-message"
					name="message"
					required
					rows={5}
					className="resize-y rounded-lg border border-amber-900/20 px-4 py-3 text-amber-950 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
					placeholder="Como podemos ajudar?"
				/>
			</div>

			<button
				type="submit"
				className="rounded-lg bg-amber-900 px-6 py-3 font-bold text-white transition hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900"
			>
				Enviar mensagem
			</button>
		</form>
	);
}
