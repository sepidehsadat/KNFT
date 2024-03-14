import React from 'react'
import Style from './KSBanner.module.css'
import banner from "../assets/images/banner.png";

export default function KSBanner() {
  return (
    <div className={Style.ks_banner}>
         <img src={banner} alt="banner"  width="100%" />
         <h3 className={Style.ks_banner_title}>خود ساخته بی درنگ یاد بگیر</h3>
    </div>
  )
}
