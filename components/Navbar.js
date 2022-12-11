import Image from "next/image"
import Link from "next/link"
import style from '/style/navbar.module.scss'
export default function Navbar() {
  return (
    <>
      <header className={style.hero}>
        <div className={style.container}>
          <nav className={style.nav}>
            <h1 className={style.nav__logo}>Golden<span>Gym</span></h1>
            <ul className={style.nav__menu}>
              <li className={style.nav__item}>
                <Link href="#" className={style.nav__link}>item-1</Link>
              </li>
              <li className={style.nav__item}>
                <Link href="#" className={style.nav__link}>item-2</Link>
              </li>
              <li className={style.nav__item}>
                <Link href="#" className={style.nav__link}>item-3</Link>
              </li>
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
};
