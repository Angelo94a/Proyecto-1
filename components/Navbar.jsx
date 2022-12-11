import Image from 'next/image'
import Link from 'next/link'
import style from '/style/navbar.module.scss'

const link = [
	{
		label: 'Home',
		route: '/',
	},
	{
		label: 'Contacs',
		route: '/contacs',
	},
	{
		label: 'About',
		route: '/about',
	},
]
export default function Navbar() {
	return (
		<>
			<header className={style.hero}>
				<div className={style.container}>
					<nav className={style.nav}>
						<h1 className={style.nav__branding}>
							Golden<span>Gym</span>
						</h1>
						<ul className={style.nav__menu}>
							{link.map(({ label, route }) => (
								<li key={route} className={style.nav__item}>
									<Link href={route} className={style.nav__link}>{label}</Link>
								</li>
							))}
						</ul>
						
						<div className={style.social}>
							<Link href="#" className={style.social__link}>
								<ion-icon name="logo-facebook"></ion-icon>
							</Link>
							<Link href="#" className={style.social__link}>
								<ion-icon name="logo-instagram"></ion-icon>
							</Link>
						</div>

						<div className={style.btn}>
							<span className={style.bar}></span>
							<span className={style.bar}></span>
							<span className={style.bar}></span>
						</div>
					</nav>
				</div>
			</header>
		</>
	)
}
