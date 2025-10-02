import style from "./popUp.module.css";
import Link from "next/link";

export default function PopUp() {
	return (
		<div className={style.popUp__container}>
			<span className={style.popUp__title}>Табель</span>
			<ul className={style.popUp__list}>
				<li className="popUp__item">
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
