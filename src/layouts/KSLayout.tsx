import React, { ReactNode } from 'react'
import KSHeader from '../components/KSHeader'
import KSFooter from '../components/KSFooter'

export interface IKSLayoutProps
{
	children: ReactNode
}

export default function KSLayout(props: IKSLayoutProps)
{
	return (
		<>
			<KSHeader />
			{props.children}
			<KSFooter />
		</>
	)
}

