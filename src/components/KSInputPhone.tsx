import React from 'react'
import Style from './KSInputPhone.module.css'

export default function KSInputPhone()
{
    return (
        <>
            <input className={Style.ks_input_phone} type="tel" id="phone" name="phone" placeholder='+98' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
        </>
    )
}
