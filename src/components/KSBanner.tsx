import React from 'react'
import Style from './KSBanner.module.css'
import KSButtonGray from './KSButtonGray'
import banner from "../assets/images/banner.png";

export default function KSBanner()
{
  return (
    <div className= {`${Style.ks_banner} container`}>
      <div className={`${Style.parent_cotent_left} d-flex flex-column justify-content-center container`}>
        <h1 className='mb-4'>Buy, Create &<br />
          Sell <span className='text_green'>Unique NFTs</span> File.</h1>
        <p className='mb-4'>NFTs are used for digital art and collectibles, GameFi <br />projects, metaverses, and more.</p>
        <KSButtonGray title={"Get in Touch"} />

        <div className={`${Style.parent_banner_number} mt-5`}>
          <h3 className='pt-4 mb-4'>Nico NFT Marketplace Overview</h3>
          <div className='d-flex gap-5'>
            <div>
              <h5>World Arts</h5>
              <p>30.000 +</p>
            </div>
            <div>
              <h5>Digital Artists</h5>
              <p>17.000 +</p>
            </div>
            <div>
              <h5>Live Auctions</h5>
              <p>22.000 +</p>
            </div>
            <div>
              <h5>Unique Products</h5>
              <p>50.000 +</p>
            </div>
           
          </div>
        </div>
      </div>
      <img src={banner} alt="banner" width="auto" />

    </div>
  )
}
