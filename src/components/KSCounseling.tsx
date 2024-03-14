import React from 'react'
import style from './KSCounseling.module.css'
import KSInputPhone from './KSInputPhone'
import KSButton from './KSButton'

export default function KSCounseling()
{
    return (
        <div className={`${style.ks_counseling} d-flex justify-content-center align-items-center`}>
            <div className={`${style.ks_parent_form} d-flex justify-content-center align-items-center flex-column`}>
                <h5 className={'mb-4 font-24-bold'}>دریافت مشاوره</h5>
                <p className={'mb-4 font-16-normal'}>برای دریافت مشاوره شماره همراه خود را وارد کنید تا کارشناسان ما با شما تماس بگیرند</p>
                <div className='d-flex gap-3 w-100'>
                    <KSButton title={"ارسال"} onclick={()=>{}}/>
                    <KSInputPhone />
                </div>
            </div>
        </div>
    )
}
