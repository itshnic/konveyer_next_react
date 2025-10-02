import style from "./nav.module.css";
import Link from "next/link";
import PopUp from "@/app/ui/components/PopUp/popUp";

export default function Nav() {
	return (
		<nav className={style.header__nav}>
			<ul className={style.header__list}>
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
