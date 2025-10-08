"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PopUp() {
	const [vis, setVis] = useState("hidden");

	function getBlock() {
		if (vis == "hidden") {
			setVis("block");
		} else setVis("hidden");
	}
	return (
		<div className="text-[white]  bg-[#23272C] p-[5px]">
			<span
				onClick={getBlock}
				className="font-bold after:content-['<'] cursor-pointer"
			>
				Табель
			</span>
			<ul className={`p-[5px] ${vis}`}>
				<li className="">
					<Link href="https://online-workvista.ru/indicators">Операторы</Link>
				</li>
				<li>
					<Link href="https://online-workvista.ru/indicators">
						Администраторы
					</Link>
				</li>
				<li>
					<Link href="https://online-workvista.ru/indicators">Техники</Link>
				</li>
				<li>
					<Link href="https://online-workvista.ru/indicators">Техничка</Link>
				</li>
			</ul>
		</div>
	);
}
