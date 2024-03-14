import React from 'react'
import Style from './KSFooter.module.css'
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import youtube from "../assets/images/youtube.png";
import footer_logo from "../assets/images/footer_logo.png";
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
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <div className={`${Style.ks_border_sm_bottom} col-12 col-lg-4 d-flex justify-content-around py-4 py-md-0`} >
            <ul className={`${Style.ks_footer_list} mb-0`}>
              <h5 className='font-24-bold mb-4'>صفحات مهم</h5>
              <li className='font-14-normal-500 mb-3'>صفحه اصلی</li>
              <li className='font-14-normal-500 mb-3'>لیست دوره ها</li>
              <li className='font-14-normal-500 mb-3'>درباره ما</li>
              <li className='font-14-normal-500 mb-3'>ارتباط با ما</li>
              <li className='font-14-normal-500 mb-3'>سوالات متداول</li>
            </ul>
            <ul className={`${Style.ks_footer_list} mb-0`}>
              <h5 className='font-24-bold mb-4'>لیست دوره ها</h5>
              <li className='font-14-normal-500 mb-3'>دوره مدیریت بیزنس</li>
              <li className='font-14-normal-500 mb-3'>دوره جهش ثروت</li>
              <li className='font-14-normal-500 mb-3'>دوره کسب و کار اینستاگرام</li>
              <li className='font-14-normal-500 mb-3'>دوره مدیریت بیزنس ۲</li>
              <li className='font-14-normal-500 mb-3'>دوره مدیریت بیزنس ۳</li>
            </ul>
          </div>
          <div className='col-12 col-lg-4 my-4 my-md-0'>
            <h5 className='font-24-bold mb-4'>مجوزها</h5>
            <img className="-4 ms-50" src={samandehi} alt="samandehi" />
            <img className="" src={enamad} alt="enamad" />
          </div>
        </div>
        <div className={`${Style.ks_parent_bottom} `}>
          <div className='order-md-0 order-1 pt-4 pt-md-0'>
            <p className='mb-3 font-18-bold'>آدرس</p>
            <p className='font-16-normal '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
          </div>
          <div className={`${Style.ks_border_sm_bottom} d-flex align-items-center order-md-1 order-0 pb-4 pb-md-0`} >
            <p className='font-14-normal-400 mb-0 ms-4'>ارتباط با پشتیبانی<br />۰۲۱-۴۵۶۵۶</p>
            <div className={`gap-2 gap-md-4 d-flex`}>
              <a href="#"><img src={youtube} alt="youtube" width="48" /></a>
              <a href="#"><img src={linkedin} alt="linkedin" width="48" /></a>
              <a href="#"><img src={twitter} alt="twitter" width="48" /></a>
              <a href="#"><img src={instagram} alt="instagram" width="48" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
