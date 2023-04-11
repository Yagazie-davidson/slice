import React from "react";

function MenuContent() {
	interface Menu {
		item: string;
		price: number;
		description: string;
	}
	[];
	const menu: Menu[] = [
		{
			item: "oreos cheesecake",
			price: 6000,
			description:
				"Oreos cheesecake filled with crushed Oreos topped with cream cheese.",
		},
		{
			item: "oreos cheesecake",
			price: 6000,
			description:
				"Oreos cheesecake filled with crushed Oreos topped with cream cheese.",
		},
	];
	console.log(menu);
	return (
		<div>
			<h2 className="bg-black text-white text-center px-24 py-4 my-5">
				DESSERTS
			</h2>
			<section className="flex flex-col gap-y-10">
				{menu.map((item, index) => {
					return (
						<div key={index}>
							<h3 className="font-bold">{item.item.toUpperCase()}</h3>
							<p className="w-72 sm:w-full">{item.description}</p>
							<p className="text-[#008000] font-bold">₦ {item.price}</p>
						</div>
					);
				})}
			</section>
		</div>
	);
}

export default MenuContent;
