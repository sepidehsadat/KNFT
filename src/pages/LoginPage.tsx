import React from 'react'
import KSInputText from '../components/KSInputText'
import KSButton from '../components/KSButton'
import { Routes } from '../KSRoutes'
import KSSection from '../components/KSSection'

export default function LoginPage()
{
	const handleSubmit = (): void =>
	{
		window.location.pathname = Routes.Dashboard;
	}
	return (
		<KSSection>
			<h5 >WellCome back !👋</h5>
			<h3 className='mb-2'>Login to your account</h3>
			<KSInputText placeholder={"UserName"} type={"text"} />
			<KSInputText placeholder={"Password"} type={"text"} />
			<KSButton title={"Login"} onclick={handleSubmit} />
		</KSSection>
	)
}
