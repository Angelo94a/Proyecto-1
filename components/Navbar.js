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
						<h1 className={style.nav__logo}>
							Golden<span>Gym</span>
						</h1>
						<ul className={style.nav__menu}>
							{link.map(({ label, route }) => (
								<li key={route} className={style.nav__item}>
									<Link href={route} className={style.nav__link}>{label}</Link>
								</li>
							))}
						</ul>

						<div className={style.btn}>
							<span className={style.bar}></span>
							<bar-1></bar-1>
							<span className={style.bar}></span>
							<bar-2></bar-2>
							<span className={style.bar}></span>
							<bar-3></bar-3>
						</div>
					</nav>
				</div>
			</header>
		</>
	)
}
