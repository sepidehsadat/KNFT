import React from 'react'
import Style from './KSFooter.module.css'
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import youtube from "../assets/images/youtube.png";
import footer_logo from "../assets/images/logo.png";
import samandehi from "../assets/images/samandehi.png";
import enamad from "../assets/images/enamad.png";
export default function KSFooter()
{
	return (
		<div className={Style.ks_footer}>
			<div className='container'>
				<div className={`${Style.ks_parent_top} `}>
					<div className={`${Style.ks_border_sm_bottom} col-12 col-lg-4 pb-4 pb-md-0`} >
						<img className="mb-3 mb-md-4" src={footer_logo} alt="logo_footer" />
						<p className='mb-0'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
					<div className={`${Style.ks_border_sm_bottom} col-12 col-lg-4 d-flex justify-content-around py-4 py-md-0`} >
						<ul className={`${Style.ks_footer_list} mb-0`}>
							<h5 className='font-24-bold mb-4'>Pages</h5>
							<li className='font-14-normal-500 mb-3'>Page 1</li>
							<li className='font-14-normal-500 mb-3'>Page 2</li>
							<li className='font-14-normal-500 mb-3'>Page 3</li>
						</ul>
						<ul className={`${Style.ks_footer_list} mb-0`}>
							<h5 className='font-24-bold mb-4'>Projects</h5>
							<li className='font-14-normal-500 mb-3'>Project 1</li>
							<li className='font-14-normal-500 mb-3'>Project 2</li>
							<li className='font-14-normal-500 mb-3'>Project 3</li>
						</ul>
					</div>
					<div className='col-12 col-lg-4 my-4 my-md-0'>
						<img className="-4 ms-50" src={samandehi} alt="samandehi" />
						<img className="" src={enamad} alt="enamad" />
					</div>
				</div>
				<div className={`${Style.ks_parent_bottom} `}>
					<div className='order-md-0 order-1 pt-4 pt-md-0'>
						<p className='mb-3 font-18-bold'> Address : <span className='font-16-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
						</p>
					</div>
					<div className={`${Style.ks_border_sm_bottom} d-flex align-items-center order-md-1 order-0 pb-4 pb-md-0`} >
						<div className={`gap-2 gap-md-4 d-flex`}>
							<a href="www.google.com"><img src={youtube} alt="youtube" width="48" /></a>
							<a href="www.google.com"><img src={linkedin} alt="linkedin" width="48" /></a>
							<a href="www.google.com"><img src={twitter} alt="twitter" width="48" /></a>
							<a href="www.google.com"><img src={instagram} alt="instagram" width="48" /></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
