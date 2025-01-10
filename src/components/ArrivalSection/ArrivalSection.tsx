import styles from './ArrivalSection.module.scss'

export const ArrivalSection = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.mainItem}>
				<h4 className={styles.heading}>PlayStation 5</h4>
				<p className={styles.description}>
					Black and White version of the PS5 coming out on sale.
				</p>
				<a className={styles.link}>Shop Now</a>
			</div>
			<div className={styles.innerWrapper}>
				<div className={styles.middleItem}>
					<h4 className={styles.heading}>Women’s Collections</h4>
					<p className={styles.description}>
						Featured woman collections that give you another vibe.
					</p>
					<a className={styles.link}>Shop Now</a>
				</div>
				<div className={styles.leftItem}>
					<h4 className={styles.heading}>Speakers</h4>
					<p className={styles.description}>Amazon wireless speakers</p>
					<a className={styles.link}>Shop Now</a>
				</div>
				<div className={styles.rightItem}>
					<h4 className={styles.heading}>Perfume</h4>
					<p className={styles.description}>GUCCI INTENSE OUD EDP</p>
					<a className={styles.link}>Shop Now</a>
				</div>
			</div>
		</div>
	)
}
