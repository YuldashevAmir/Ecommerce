import clsx from 'clsx'
import { Heart, Search, ShoppingCart } from 'lucide-react'
import { Container } from '../layout/Container/Container'
import styles from './Header.module.scss'

export const Header = () => {
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
				<Heart className={styles.icon} />
				<ShoppingCart className={styles.icon} />
			</Container>
		</header>
	)
}
