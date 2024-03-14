import React from 'react'
import KSInputText from '../components/KSInputText'
import KSButton from '../components/KSButton'
import {Routes} from '../KSRoutes'

export default function LoginPage()
{
    const handleSubmit = (): void =>{
        window.location.pathname = Routes.Dashboard;
    }
    return (
        <>
            <KSInputText placeholder={"نام کاربری"} type={"text"} />
            <KSInputText placeholder={"رمزعبور "} type={"text"} />
            <KSButton title={"ورود"} onclick={handleSubmit} />
        </>
    )
}
