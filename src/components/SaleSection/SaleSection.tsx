import { useEffect, useState } from 'react'
import boombox from '../../assets/images/boombox.png'
import styles from './SaleSection.module.scss'

export const SaleSection = () => {
	const [timeLeft, setTimeLeft] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000

		const interval = setInterval(() => {
			const currentTime = new Date().getTime()
			const difference = targetTime - currentTime

			if (difference <= 0) {
				clearInterval(interval)
				setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
			} else {
				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
				const minutes = Math.floor((difference / (1000 * 60)) % 60)
				const seconds = Math.floor((difference / 1000) % 60)
				setTimeLeft({ hours, minutes, seconds })
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<section>
			<div className={styles.wrapper}>
				<div className={styles.text}>
					<h5 className={styles.subHeading}>Categories</h5>
					<h1 className={styles.heading}>Enhance Your Music Experience</h1>
					<div className={styles.saleTimeLeft}>
						<div className={styles.circle}>
							<span className={styles.value}>{timeLeft.hours}</span>
							<span className={styles.title}>Hours</span>
						</div>
						<div className={styles.circle}>
							<span className={styles.value}>{timeLeft.minutes}</span>
							<span className={styles.title}>Minutes</span>
						</div>
						<div className={styles.circle}>
							<span className={styles.value}>{timeLeft.seconds}</span>
							<span className={styles.title}>Seconds</span>
						</div>
					</div>
					<button className={styles.buyNowBtn}>Buy Now!</button>
				</div>
				<div className={styles.image}>
					<img src={boombox} alt='Boombox img' />
				</div>
			</div>
		</section>
	)
}
