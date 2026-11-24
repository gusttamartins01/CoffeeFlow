type CardCommunityProps = {
	image: string;
	title: string;
	content: string;
	description: string;
};

export default function CardCommunity({
	image,
	title,
	content,
	description
}: CardCommunityProps) {
	return (
		<div className="mx-10 md:mx-5 mt-16 md:mt-20 mb-5 overflow-hidden rounded-2xl bg-amber-100/20 border-2 border-amber-700 transition duration-300 hover:-translate-y-1">
			<img
				src={image}
				alt={title}
				className="block h-40 w-full object-cover object-center transition duration-500 ease-in-out hover:scale-105"
			/>

			<div className="flex flex-col p-4 items-center gap-5 justify-center text-center">
				<h3 className="font-semibold text-lg border-b-2 border-amber-700 pb-3">
					{title}
				</h3>

				<p className="mt-2 text-sm text-gray-600 border-b-2 border-amber-700 pb-8">
					{content}
				</p>

				<span className="block font-bold text-amber-900">{description}</span>
			</div>
		</div>
	);
}
