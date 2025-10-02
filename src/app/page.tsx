import Image from "next/image";
import style from "@/app/ui/css/mainPage.module.css";
import Nav from "@/app/ui/components/Nav/nav";

export default function Home() {
	return (
		<div className={style.container}>
			<header className={style.header}>
				<Nav />
			</header>
			<main className={style.main}></main>
			<footer className={style.footer}></footer>
		</div>
	);
}
