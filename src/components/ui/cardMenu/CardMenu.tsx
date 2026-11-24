type CardMenuProps = {
	image: string;
	title: string;
	description: string;
	price: string;
};

export default function CardMenu({
	image,
	title,
	description,
	price
}: CardMenuProps) {
	return (
		<div className="mx-10 md:mx-8 mt-16 md:mt-20 mb-5 overflow-hidden rounded-2xl bg-amber-100/20 border-2 border-amber-700 transition duration-300 hover:-translate-y-1">
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
					{description}
				</p>

				<span className="mt-4 block font-bold text-amber-800">{price}</span>
			</div>
		</div>
	);
}
