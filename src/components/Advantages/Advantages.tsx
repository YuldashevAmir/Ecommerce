import { Headset, ShieldCheck, Truck } from 'lucide-react'
import styles from './Advantages.module.scss'
export const Advantages = () => {
	return (
		<section>
			<div className={styles.wrapper}>
				<div className={styles.item}>
					<div className={styles.iconWrapper}>
						<Truck className={styles.icon} />
					</div>
					<h5 className={styles.title}>FREE AND FAST DELIVERY</h5>
					<p className={styles.description}>
						Free delivery for all orders over $140
					</p>
				</div>
				<div className={styles.item}>
					<div className={styles.iconWrapper}>
						<Headset className={styles.icon} />
					</div>
					<h5 className={styles.title}>24/7 CUSTOMER SERVICE</h5>
					<p className={styles.description}>Friendly 24/7 customer support</p>
				</div>
				<div className={styles.item}>
					<div className={styles.iconWrapper}>
						<ShieldCheck className={styles.icon} />
					</div>
					<h5 className={styles.title}>MONEY BACK GUARANTEE</h5>
					<p className={styles.description}>We reurn money within 30 days</p>
				</div>
			</div>
		</section>
	)
}
