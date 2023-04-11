import Link from "next/link";
import React from "react";

function Navigation() {
	const linkItems = [
		{
			link: "/",
			display: "Menu",
		},
		{
			link: "/about",
			display: "About Us",
		},
		{
			link: "/contact",
			display: "Contact Us",
		},
	];
	return (
		<div className="flex gap-x-3 text-white bg-black px-10 py-5 rounded-md mt-[-50px]">
			{linkItems.map((item, index) => (
				<Link href={item.link} key={index}>
					{item.display}
				</Link>
			))}
		</div>
	);
}

export default Navigation;
// Mobile
// px 24
