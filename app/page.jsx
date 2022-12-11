import style from '/style/home.module.scss'
import Link from 'next/link'

export default function page() {
	return (
		<>
			<div className={style.hero}>
				<div className={style.container}>
					<div className={style.hero__content}>
						<h2 className={style.hero__title}>Bienvenido</h2>
						<p className={style.hero__text}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
							maiores sunt, impedit facere excepturi ullam nesciunt soluta,
							dolorum quam blanditiis commodi. Rem laboriosam maxime officiis.
						</p>
						<Link className={style.hero__link} href="#">
							<ion-icon name="information-outline"></ion-icon>
							Más información
						</Link>
					</div>
				</div>
			</div>

			<main className={style.mainHero}>
				<div className={style.container}>
					<h2 className={style.title}>Nuestro Programas</h2>
					<div className={style.contient}>
						<div className={style.group__card}>
							<h3 className={style.group__title}>Cardio</h3>
							<Link className={style.group__link} href="#">
								Más informacón
								<div className={style.group__icon}>
									<ion-icon name="chevron-forward-outline"></ion-icon>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
