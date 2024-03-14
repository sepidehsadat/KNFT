import React from 'react'
import Style from './KSBanner.module.css'
import banner from "../assets/images/banner.png";

export default function KSBanner()
{
  return (
    <div className={Style.ks_banner}>
      <div className={`${Style.parent_cotent_left} d-flex flex-column justify-content-center container`}>
        <h1>Buy, Create &
          Sell Unique NFTs File.</h1>
        <p>NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.</p>
      </div>
      <img src={banner} alt="banner" width="auto" />

    </div>
  )
}
