import { Container } from '../layout/Container/Container'
import styles from './TopHeader.module.scss'

export const TopHeader = () => {
	return (
		<div className={styles.topHeader}>
			<Container className='h-full flex items-center'>
				<div className={styles.topHeaderContent}>
					<p className={styles.linkTitle}>
						Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
					</p>
					<a className={styles.link}>ShopNow</a>
				</div>
				<select
					name='language'
					value={'English'}
					className={styles.languageSelect}
				>
					<option value='English' className={styles.languageOption}>
						English
					</option>
				</select>
			</Container>
		</div>
	)
}
