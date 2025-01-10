import clsx from 'clsx'
import { Eye, Heart } from 'lucide-react'
import { useState } from 'react'
import useStore from '../../../store/store'
import { StarIcon } from '../../UI/StarIcon'
import styles from './ProductCart.module.scss'

type Product = {
	id: number
	image: string
	title: string
	discount?: number
	currentPrice: number
	oldPrice?: number
	rating: number
	comments: number
	colors?: string[]
	isNew?: boolean
}

interface ProductCartProps {
	product: Product
}

export const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
	const {
		id,
		image,
		title,
		discount,
		currentPrice,
		oldPrice,
		rating,
		comments,
		isNew,
		colors,
	} = product

	const [activeColor, setActiveColor] = useState<number>(0)

	const { increaseBasket, increaseLike } = useStore()

	return (
		<div key={id} className={styles.productCart}>
			{discount && <div className={styles.discount}>- {discount}%</div>}
			{isNew && <div className={styles.new}>new</div>}
			<div className={styles.like}>
				<Heart className={styles.icon} onClick={increaseLike} />
			</div>
			<div className={styles.watch}>{<Eye className={styles.icon} />}</div>

			<div className={styles.image}>
				<img src={image} alt='productImage' />
				<button
					className={styles.addToCartBtn}
					onClick={() => increaseBasket()}
				>
					Add to Cart
				</button>
			</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.wrapper}>
				<div className={styles.prices}>
					<span className={styles.currentPrice}>${currentPrice}</span>

					<span className={styles.oldPrice}>
						{oldPrice ? `${oldPrice}` : ''}
					</span>
				</div>
				<div className={styles.additional}>
					<div className={styles.rank}>
						{Array.from({ length: 5 }).map((_, index) =>
							index < rating ? (
								<StarIcon key={index} color='#FFAD33' />
							) : (
								<StarIcon key={index} color='rgba(0, 0, 0, 0.25)' />
							)
						)}
					</div>
					<span className={styles.comments}>({comments})</span>
				</div>
				<div className={styles.colors}>
					{colors?.map((color, index) => (
						<div
							key={index}
							className={clsx(
								styles.colorCircleBorder,
								activeColor === index && '!border-black'
							)}
							onClick={() => setActiveColor(index)}
						>
							<div
								className={styles.circle}
								style={{
									background: `${color}`,
								}}
							></div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
