import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<button className={clsx(styles.button, className)} {...props}>
			{children}
		</button>
	)
}
