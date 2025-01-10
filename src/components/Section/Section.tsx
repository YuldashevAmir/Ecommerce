import clsx from 'clsx'
import { useEffect, useState } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
	heading: string
	sectionTitle: string
	children?: React.ReactNode
	timeLeft?: string
	className?: string
}

export const Section: React.FC<SectionProps> = ({
	sectionTitle,
	heading,
	children,
	timeLeft,
	className,
}) => {
	const [time, setTime] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		if (!timeLeft) return

		const targetDate = new Date(timeLeft).getTime()

		const updateCountdown = () => {
			const now = new Date().getTime()
			const timeDifference = targetDate - now

			if (timeDifference <= 0) {
				setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
				return
			}

			const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
			const hours = Math.floor(
				(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
			const minutes = Math.floor(
				(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
			)
			const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

			setTime({ days, hours, minutes, seconds })
		}

		updateCountdown()
		const timer = setInterval(updateCountdown, 1000)

		return () => clearInterval(timer)
	}, [timeLeft])

	return (
		<section className={clsx(styles.section, className)}>
			<div className={styles.redRectangle}></div>
			<h5 className={styles.sectionTitle}>{sectionTitle}</h5>
			<div className={styles.headingContent}>
				<h2 className={styles.heading}>{heading}</h2>
				{timeLeft && (
					<div className={styles.timeLeft}>
						<div className={styles.timeLeftItem}>
							<span className={styles.title}>Days</span>
							<span className={styles.value}>
								{String(time.days).padStart(2, '0')}
							</span>
						</div>
						<span className={styles.semiColon}>:</span>
						<div className={styles.timeLeftItem}>
							<span className={styles.title}>Hours</span>
							<span className={styles.value}>
								{String(time.hours).padStart(2, '0')}
							</span>
						</div>
						<span className={styles.semiColon}>:</span>
						<div className={styles.timeLeftItem}>
							<span className={styles.title}>Minutes</span>
							<span className={styles.value}>
								{String(time.minutes).padStart(2, '0')}
							</span>
						</div>
						<span className={styles.semiColon}>:</span>
						<div className={styles.timeLeftItem}>
							<span className={styles.title}>Seconds</span>
							<span className={styles.value}>
								{String(time.seconds).padStart(2, '0')}
							</span>
						</div>
					</div>
				)}
			</div>
			{children}
		</section>
	)
}
