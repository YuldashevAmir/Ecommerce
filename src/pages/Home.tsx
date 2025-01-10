import { BottomHeader } from '../components/BottomHeader/BottomHeader'
import { Header } from '../components/Header/Header'
import { Container } from '../components/layout/Container/Container'
import { Slider } from '../components/layout/Slider/Slider'
import { Section } from '../components/Section/Section'
import { TopHeader } from '../components/TopHeader/TopHeader'
import styles from './Home.module.scss'

import { Eye, Heart } from 'lucide-react'
import todaySlider1Image1 from '../assets/images/todaySlider1.png'
import todaySlider1Image2 from '../assets/images/todaySlider2.png'
import todaySlider1Image3 from '../assets/images/todaySlider3.png'
import todaySlider1Image4 from '../assets/images/todaySlider4.png'

import { StarIcon } from '../components/UI/StarIcon'

import clsx from 'clsx'
import { useState } from 'react'
import { CameraIcon } from '../components/UI/CameraIcon'
import { CellPhoneIcon } from '../components/UI/CellPhoneIcon'
import { ComputerIcon } from '../components/UI/ComputerIcon'
import { GamePadIcon } from '../components/UI/GamepadIcon'
import { HeadphoneIcon } from '../components/UI/HeadphoneIcon'
import { SmartWatchIcon } from '../components/UI/SmartWatchIcon'

const currentDate = new Date()
const futureDate = new Date(
	currentDate.getTime() + 3 * 86400000 + 23 * 3600000 + 19 * 60000 + 56 * 1000
)

const TodaySliderItems = [
	{
		id: 0,
		image: todaySlider1Image1,
		title: 'HAVIT HV-G92 Gamepad',
		discount: 40,
		currentPrice: 120,
		oldPrice: 160,
		rating: 5,
		comments: 88,
	},
	{
		id: 1,
		image: todaySlider1Image2,
		title: 'AK-900 Wired Keyboard',
		discount: 35,
		currentPrice: 960,
		oldPrice: 1160,
		rating: 4,
		comments: 75,
	},
	{
		id: 2,
		image: todaySlider1Image3,
		title: 'IPS LCD Gaming Monitor',
		discount: 30,
		currentPrice: 370,
		oldPrice: 400,
		rating: 5,
		comments: 99,
	},
	{
		id: 3,
		image: todaySlider1Image4,
		title: 'S-Series Comfort Chair ',
		discount: 25,
		currentPrice: 375,
		oldPrice: 400,
		rating: 4.5,
		comments: 99,
	},
	{
		id: 4,
		image: todaySlider1Image1,
		title: 'HAVIT HV-G92 Gamepad',
		discount: 40,
		currentPrice: 120,
		oldPrice: 160,
		rating: 5,
		comments: 88,
	},
	{
		id: 5,
		image: todaySlider1Image2,
		title: 'AK-900 Wired Keyboard',
		discount: 35,
		currentPrice: 960,
		oldPrice: 1160,
		rating: 4,
		comments: 75,
	},
	{
		id: 6,
		image: todaySlider1Image3,
		title: 'IPS LCD Gaming Monitor',
		discount: 30,
		currentPrice: 370,
		oldPrice: 400,
		rating: 5,
		comments: 99,
	},
	{
		id: 7,
		image: todaySlider1Image4,
		title: 'S-Series Comfort Chair ',
		discount: 25,
		currentPrice: 375,
		oldPrice: 400,
		rating: 4.5,
		comments: 99,
	},
]

const CategorySliderItems = [
	{
		id: 0,
		icon: CellPhoneIcon,
		title: 'Phones',
	},
	{
		id: 1,
		icon: ComputerIcon,
		title: 'Computer',
	},
	{
		id: 2,
		icon: SmartWatchIcon,
		title: 'SmartWatch',
	},
	{
		id: 3,
		icon: CameraIcon,
		title: 'Camera',
	},
	{
		id: 4,
		icon: HeadphoneIcon,
		title: 'Headphone',
	},
	{
		id: 5,
		icon: GamePadIcon,
		title: 'Gaming',
	},
	{
		id: 6,
		icon: CellPhoneIcon,
		title: 'Phones',
	},
	{
		id: 7,
		icon: ComputerIcon,
		title: 'Computer',
	},
	{
		id: 8,
		icon: SmartWatchIcon,
		title: 'SmartWatch',
	},
	{
		id: 9,
		icon: CameraIcon,
		title: 'Camera',
	},
	{
		id: 10,
		icon: HeadphoneIcon,
		title: 'Headphone',
	},
	{
		id: 11,
		icon: GamePadIcon,
		title: 'Gaming',
	},
]

export const Home = () => {
	const [activeCategoryId, setActiveCategoryId] = useState<number>(3)

	return (
		<>
			<TopHeader />
			<Header />
			<BottomHeader />
			<Container>
				<Section
					sectionTitle="Today's"
					heading='Flash Sales'
					timeLeft={futureDate.toISOString()}
				>
					<Slider
						slidesInOneWindow={4}
						maxItemWidth={270}
						className='overflow-hidden'
						gap={30}
					>
						{TodaySliderItems.map(product => (
							<div key={product.id} className={styles.TodaySliderItem}>
								<div className={styles.discount}>- {product.discount}%</div>
								<div className={styles.like}>
									<Heart className={styles.icon} />
								</div>
								<div className={styles.watch}>
									{<Eye className={styles.icon} />}
								</div>

								<div className={styles.image}>
									<img src={product.image} alt='productImage' />
									<button className={styles.addToCartBtn}>Add to Cart</button>
								</div>
								<div className={styles.title}>{product.title}</div>
								<div className={styles.prices}>
									<span className={styles.currentPrice}>
										${product.currentPrice}
									</span>
									<span className={styles.oldPrice}>${product.oldPrice}</span>
								</div>
								<div className={styles.additional}>
									<div className={styles.rank}>
										{Array.from({ length: 5 }).map((_, index) =>
											index < product.rating ? (
												<StarIcon key={index} color='#FFAD33' />
											) : (
												<StarIcon key={index} color='rgba(0, 0, 0, 0.25)' />
											)
										)}
									</div>
									<span className={styles.comments}>({product.comments})</span>
								</div>
							</div>
						))}
					</Slider>
				</Section>
				<Section sectionTitle='Categories' heading='Browse By Category'>
					<Slider
						slidesInOneWindow={6}
						maxItemWidth={170}
						className='overflow-hidden'
						gap={24}
					>
						{CategorySliderItems.map(category => (
							<div
								key={category.id}
								className={clsx(
									styles.categorySliderItem,
									activeCategoryId === category.id && styles.activeCategoryItem
								)}
								onClick={() => setActiveCategoryId(category.id)}
							>
								<div className={styles.image}>
									<category.icon
										color={activeCategoryId === category.id ? 'white' : 'black'}
									/>
								</div>
								<div className={styles.title}>{category.title}</div>
							</div>
						))}
					</Slider>
				</Section>
			</Container>
		</>
	)
}
