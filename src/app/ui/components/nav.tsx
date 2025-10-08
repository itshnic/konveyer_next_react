import Link from "next/link";
import PopUp from "@/app/ui/components/popUp";

export default function Nav() {
	return (
		<nav className="">
			<ul className="">
				<li>
					<PopUp />
				</li>
				<li>
					<Link href="https://www.avito.ru/profile/notifications"></Link>
				</li>
			</ul>
		</nav>
	);
}
