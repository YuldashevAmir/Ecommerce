import clsx from 'clsx'
import React from 'react'
import styles from './Container.module.scss'
interface ContainerProps {
	children: React.ReactNode
	className?: string
}

export const Container: React.FC<ContainerProps> = ({
	children,
	className,
}) => {
	return <div className={clsx(styles.container, className)}>{children}</div>
}
