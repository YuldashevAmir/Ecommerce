import clsx from 'clsx'
import { Heart, Search, ShoppingCart } from 'lucide-react'
import useStore from '../../store/store'
import { Container } from '../layout/Container/Container'
import styles from './Header.module.scss'

export const Header = () => {
	const countBasket = useStore(state => state.countBasket)
	const countLike = useStore(state => state.countLike)

	return (
		<header className={styles.header}>
			<Container className='flex justify-between items-center'>
				<h2 className={styles.subHeading}>Exclusive</h2>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						<li className={clsx(styles.navItem, styles.navItemActive)}>
							<a className={styles.navLink}>Home</a>
						</li>
						<li className={styles.navItem}>
							<a className={styles.navLink}>Contact</a>
						</li>
						<li className={styles.navItem}>
							<a className={styles.navLink}>About</a>
						</li>
						<li className={styles.navItem}>
							<a className={styles.navLink}>Sign Up</a>
						</li>
					</ul>
				</nav>
				<div className={styles.field}>
					<input
						placeholder='What are you looking for?'
						type='text'
						className={styles.search}
					/>
					<Search className={styles.searchIcon} />
				</div>
				<div className={styles.iconWrapper}>
					<Heart className={styles.icon} />
					{countLike != 0 && <div className={styles.counter}>{countLike}</div>}
				</div>

				<div className={styles.iconWrapper}>
					<ShoppingCart className={styles.icon} />
					{countBasket != 0 && (
						<div className={styles.counter}>{countBasket}</div>
					)}
				</div>
			</Container>
		</header>
	)
}
