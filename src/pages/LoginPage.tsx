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
			<figure className='text-center'>
				<h5 className='mb-2'>WellCome back !👋</h5>
				<h3 >Login to your account</h3>
			</figure>
			<KSInputText placeholder={"UserName"} type={"text"} label='User Name' />
			<KSInputText placeholder={"Password"} type={"text"} label='Password' />
			<KSButton title={"Login"} onclick={handleSubmit} />
		</KSSection>
	)
}
