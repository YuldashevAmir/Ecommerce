import clsx from 'clsx'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import appleIcon from '../../assets/icons/appleLogo.svg'
import carouselPhoto from '../../assets/images/carousel.png'
import { Container } from '../layout/Container/Container'
import styles from './BottomHeader.module.scss'

const controllerItems = [
	'Woman’s Fashion',
	'Men’s Fashion',
	'Electronics',
	'Home & Lifestyle',
	'Medicine',
	'Sports & Outdoor',
	'Baby’s & Toys',
	'Groceries & Pets',
	'Health & Beauty',
]

const carouselItems = [
	{
		id: 1,
		title: 'iPhone 14 Series',
		heading: 'Up to 10% off Voucher',
		image: carouselPhoto,
	},
	{
		id: 2,
		title: 'iPhone 15 Series',
		heading: 'Up to 10% off Voucher',
		image: carouselPhoto,
	},
	{
		id: 3,
		title: 'iPhone 16 Series',
		heading: 'Up to 10% off Voucher',
		image: carouselPhoto,
	},
	{
		id: 4,
		title: 'iPhone 17 Series',
		heading: 'Up to 10% off Voucher',
		image: carouselPhoto,
	},
]

export const BottomHeader = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(prevIndex => (prevIndex + 1) % carouselItems.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<Container>
			<div className={styles.bottomHeader}>
				<div className={styles.controller}>
					{controllerItems.map((item, index) => (
						<div key={index} className={styles.controllerItem}>
							<span className={styles.controllerItemText}>{item}</span>
							{index < 2 && <ChevronRight className={styles.rightArrow} />}
						</div>
					))}
				</div>
				<div className={styles.carousel}>
					{carouselItems.map((item, index) => (
						<div
							key={item.id}
							className={clsx(
								styles.carouselItem,
								index === activeIndex && styles.carouselItemActive
							)}
						>
							<div className={styles.info}>
								<div className={styles.topInfo}>
									<img
										className={styles.apple}
										src={appleIcon}
										alt='Apple Logo'
									/>
									<h5 className={styles.title}>{item.title}</h5>
								</div>
								<h1 className={styles.heading}>{item.heading}</h1>
								<div className={styles.bottomInfo}>
									<a className={styles.link}>Shop Now</a>
									<ArrowRight className={styles.rightArrow} />
								</div>
							</div>
							<div className={styles.carouselImage}>
								<img src={item.image} alt={item.title} />
							</div>
						</div>
					))}
					<div className={styles.switcher}>
						{carouselItems.map((_, index) => (
							<div
								key={index}
								className={clsx(
									styles.switcherDot,
									index === activeIndex && styles.active
								)}
								onClick={() => setActiveIndex(index)}
							></div>
						))}
					</div>
				</div>
			</div>
		</Container>
	)
}
