import { BottomHeader } from '../components/BottomHeader/BottomHeader'
import { Header } from '../components/Header/Header'
import { Container } from '../components/layout/Container/Container'
import { Slider } from '../components/layout/Slider/Slider'
import { Section } from '../components/Section/Section'
import { TopHeader } from '../components/TopHeader/TopHeader'

import { CategoryCart } from '../components/layout/CategoryCart/CategoryCart'
import { ProductCart } from '../components/layout/ProductCart/ProductCart'

import { CategorySliderItems } from '../constants/CategorySliderItems'
import { ThisMonthItems } from '../constants/ThisMonthItems'

import { Advantages } from '../components/Advantages/Advantages'
import { ArrivalSection } from '../components/ArrivalSection/ArrivalSection'
import { Footer } from '../components/Footer/Footer'
import { SaleSection } from '../components/SaleSection/SaleSection'
import { Button } from '../components/UI/Button/Button'
import { ProductSliderItems } from '../constants/ProductSliderItems'
import { TodaySliderItems } from '../constants/TodaySliderItems'
import styles from './Home.module.scss'
const currentDate = new Date()
const futureDate = new Date(
	currentDate.getTime() + 3 * 86400000 + 23 * 3600000 + 19 * 60000 + 56 * 1000
)

export const Home = () => {
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
					className='pb-16 border-b mt-36'
				>
					<Slider
						slidesInOneWindow={4}
						maxItemWidth={270}
						className='overflow-hidden'
						gap={20}
					>
						{TodaySliderItems.map(product => (
							<ProductCart product={product} />
						))}
					</Slider>
					<Button className='mx-auto mt-16'>View All Products</Button>
				</Section>
				<Section
					sectionTitle='Categories'
					heading='Browse By Category'
					className='py-20 border-b'
				>
					<Slider
						slidesInOneWindow={6}
						maxItemWidth={170}
						maxItemHeight={190}
						className='overflow-hidden'
						gap={24}
					>
						{CategorySliderItems.map(category => (
							<CategoryCart category={category} />
						))}
					</Slider>
				</Section>
				<Section
					variant='button'
					sectionTitle='This Month'
					heading='Best Selling Products'
					className='mt-20 mb-36'
				>
					<div className={styles.wrapper}>
						{ThisMonthItems.map(product => (
							<ProductCart product={product} />
						))}
					</div>
				</Section>
				<SaleSection />
				<Section sectionTitle='Our Products' heading='Explore Our Products'>
					<Slider
						slidesInOneWindow={8}
						maxItemWidth={270}
						className='overflow-hidden'
						gap={20}
						rows={2}
					>
						{ProductSliderItems.map(product => (
							<ProductCart product={product} />
						))}
					</Slider>
					<Button className='mx-auto mt-20'>View All Products</Button>
				</Section>
				<Section
					sectionTitle='Featured'
					heading='New Arrival'
					className='mb-36'
				>
					<ArrivalSection />
				</Section>
				<Advantages />
			</Container>
			<Footer />
		</>
	)
}
