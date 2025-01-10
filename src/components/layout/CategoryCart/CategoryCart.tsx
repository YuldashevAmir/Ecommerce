import clsx from 'clsx'
import { FC, useState } from 'react'
import styles from './CategoryCart.module.scss'

type Category = {
	id: number
	icon: FC
	title: string
}

interface CategoryCartProps {
	category: Category
}

export const CategoryCart: React.FC<CategoryCartProps> = ({ category }) => {
	const [activeCategoryId, setActiveCategoryId] = useState<number>(3)
	return (
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
	)
}
