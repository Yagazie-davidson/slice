import MenuContent from "@/components/MenuContent";
import MenuNavigation from "@/components/MenuNavigation";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import React from "react";
import { Divider } from "antd";

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<Image
				src="/slice_logo.png"
				alt="slice Logo"
				className="mt-[-50px]"
				width={250}
				height={10}
				priority
			/>
			<Navigation />
			<h4 className="mt-10">Menu</h4>
			<p className="text-center mt-10">
				Forget the calories, if it makes <br /> you happy eat it
			</p>
			<MenuNavigation />
			<MenuContent />
			<Divider />
			<Image
				src="/slice_logo.png"
				alt="slice Logo"
				className="mt-[-50px]"
				width={230}
				height={10}
				priority
			/>
		</main>
	);
}
