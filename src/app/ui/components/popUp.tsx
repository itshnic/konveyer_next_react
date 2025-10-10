"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import MySVG from "@/app/ui/components/svgReact.js";

export default function PopUp() {
	const [visible, setVisible] = useState(true);

	return (
		<div className="text-[white] bg-[#23272C] p-[5px] ">
			<div className="flex">
				<MySVG />
				<span
					onClick={() => (visible ? setVisible(false) : setVisible(true))}
					className={`font-bold cursor-pointer flex gap-1.5 self-center hover:text-[#9c9898] active:text-[white] transition duration-200 ease-in`}
				>
					Табель
					<svg
						className={`fill-current w-4 transition duration-300 ${
							visible ? `rotate-0` : `-rotate-180`
						}`}
						viewBox="0 0 52 52"
					>
						<path d="M47.6,17.8L27.1,38.5c-0.6,0.6-1.6,0.6-2.2,0L4.4,17.8c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l16.1,16.3c0.6,0.6,1.6,0.6,2.2,0l16.1-16.2c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C48.1,16.3,48.1,17.2,47.6,17.8z" />
					</svg>
				</span>
			</div>

			<ul
				className={`p-[10px] flex flex-col gap-2 transition duration-300 ease-in absolute top-8 left-0 shadow-xl/30  bg-[#23272C] rounded-sm ${
					visible ? `opacity-0 -top-100` : `opacity-100 top-8`
				}`}
			>
				<li className="hover:text-[#9c9898] transition duration-200 ease-in">
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
