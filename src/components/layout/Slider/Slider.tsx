import clsx from 'clsx'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import styles from './Slider.module.scss'
interface SliderProps {
	children: React.ReactNode
	className?: string
	slidesInOneWindow: number
	maxItemWidth: number
	gap: number
}

export const Slider: React.FC<SliderProps> = ({
	children,
	className,
	slidesInOneWindow,
	maxItemWidth,
	gap,
}) => {
	const slides = React.Children.toArray(children)
	const [currentSlide, setCurrentSlide] = useState(0)

	const slideCount = slides.length

	const handlePrev = () => {
		setCurrentSlide(prev =>
			prev === 0 ? Math.round(slideCount / slidesInOneWindow) - 1 : prev - 1
		)
	}

	const handleNext = () => {
		setCurrentSlide(prev =>
			prev === Math.round(slideCount / slidesInOneWindow) - 1 ? 0 : prev + 1
		)
	}

	return (
		<div className={clsx(styles.slider, className)}>
			<div className={styles.controller}>
				<button className={styles.btn} onClick={handlePrev}>
					<ArrowLeft className={styles.icon} />
				</button>
				<button className={styles.btn} onClick={handleNext}>
					<ArrowRight className={styles.icon} />
				</button>
			</div>

			<div
				className={styles.sliderContent}
				style={{
					display: 'flex',
					transition: 'transform 0.5s ease-in-out',
					transform: `translateX(-${currentSlide * 1200}px)`,
					gap: `${gap}px`,
				}}
			>
				{slides.map((slide, index) => (
					<div
						key={index}
						style={{
							flex: '0 0 100%',
							maxWidth: `${maxItemWidth}px`,
						}}
					>
						{slide}
					</div>
				))}
			</div>
		</div>
	)
}
