import React, { ReactNode } from 'react';
import Style from './KSSection.module.css';

export interface IKSSection
{
	children: ReactNode;
}
export default function KSSection(props: IKSSection)
{
	return (
		<div className={Style.ks_page_container}>
			<section className={Style.ks_section}>
				{props.children}
			</section>
		</div>
	)
}
