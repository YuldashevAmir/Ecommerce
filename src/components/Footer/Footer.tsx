import { SendHorizontal } from 'lucide-react'
import styles from './Footer.module.scss'

import appStore from '../../assets/images/appStore.png'
import facebook from '../../assets/images/facebook.png'
import googlePlay from '../../assets/images/googlePlay.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import qrCode from '../../assets/images/qrCode.png'
import twitter from '../../assets/images/twitter.png'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.subscribe}>
					<h4 className={styles.heading}>Exclusive</h4>
					<h5 className={styles.subHeading}>Subscribe</h5>
					<p className={styles.description}>Get 10% off your first order</p>
					<div className={styles.field}>
						<input
							type='email'
							placeholder='Enter your email'
							className={styles.email}
						/>
						<SendHorizontal className={styles.icon} />
					</div>
				</div>

				<div className={styles.support}>
					<h4 className={styles.heading}>Support</h4>
					<p className={styles.description}>
						111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
					</p>
					<p className={styles.description}>exclusive@gmail.com</p>
					<p className={styles.description}>+88015-88888-9999</p>
				</div>

				<div className={styles.account}>
					<h4 className={styles.heading}>Account</h4>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<a>My Account</a>
						</li>
						<li className={styles.listItem}>
							<a>Login / Register</a>
						</li>
						<li className={styles.listItem}>
							<a>Cart</a>
						</li>
						<li className={styles.listItem}>
							<a>Wishlist</a>
						</li>
						<li className={styles.listItem}>
							<a>Shop</a>
						</li>
					</ul>
				</div>

				<div className={styles.quickLink}>
					<h4 className={styles.heading}>Quick Link</h4>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<a>Privacy Policy</a>
						</li>
						<li className={styles.listItem}>
							<a>Terms Of Use</a>
						</li>
						<li className={styles.listItem}>
							<a>FAQ</a>
						</li>
						<li className={styles.listItem}>
							<a>Contact</a>
						</li>
					</ul>
				</div>

				<div className={styles.downloadApp}>
					<h4 className={styles.heading}>Download App</h4>
					<span className={styles.saving}>Save $3 with App New User Only</span>
					<div className={styles.apps}>
						<img src={qrCode} alt='qrCode' />
						<div className={styles.stores}>
							<img src={googlePlay} alt='googlePlay' />
							<img src={appStore} alt='appStore' />
						</div>
					</div>
					<div className={styles.socialMedia}>
						<a className={styles.socialIcon}>
							<img src={facebook} alt='Facebook' />
						</a>
						<a className={styles.socialIcon}>
							<img src={twitter} alt='Twitter' />
						</a>
						<a className={styles.socialIcon}>
							<img src={instagram} alt='Instagram' />
						</a>
						<a className={styles.socialIcon}>
							<img src={linkedin} alt='Linkedin' />
						</a>
					</div>
				</div>
			</div>
			<div className={styles.bottomFooter}>
				© 2025 Rimel. All rights reserved.
			</div>
		</footer>
	)
}
