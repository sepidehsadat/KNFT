import React from 'react'
import KSHeader from '../components/KSHeader';
import KSFooter from '../components/KSFooter';
import KSBanner from '../components/KSBanner';
import KSCourseCard from '../components/KSCourseCard';
import KSCounseling from '../components/KSCounseling';
import { CourseRow } from "../rows/CourseRow";
import Style from "./CoursePage.module.css";
import Course1 from '../assets/images/course1.png';
import Course2 from '../assets/images/course2.png';
import Course3 from '../assets/images/course3.png';
import Course4 from '../assets/images/course4.png';
import Course5 from '../assets/images/course5.png';

let courses: CourseRow[] = [
    {
        title: " Cyber Samurai #475",
        image: Course1,
        ethereum:"7.5"
    },
    {
        title: " Cyber Samurai #784",
        image: Course2,
        ethereum:"8.2"
    },
    {
        title: "Cyber Samurai #575",
        image: Course3,
        ethereum:"8.5"
    },
    {
        title: " Cyber Samurai #784",
        image: Course4,
        ethereum:"5.5"
    },
    {
        title: " Cyber Samurai #784",
        image: Course5,
        ethereum:"6.5"
    },
    {
        title: "Cyber Samurai #475 ",
        image: Course4,
        ethereum:"9.5"
    },
    
]
export default function CoursePage()
{
    return (
        <>
            <KSHeader />
            <KSBanner />
            <div className={`${Style.ks_parent_course} container `} >
                <div className='row my-5'>
                    <h5 className={`${Style.course_page_title} mb-4 `} > <span className={`${Style.course_page_title_blue}`}>Most Popular</span> NFTs </h5>
                    <div className='container'>
                        <div className='row'>
                            {
                                courses?.map((course, index) => (
                                    <div key={index} className='col-12 col-md-6 col-lg-4'><KSCourseCard course={course} /></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <KSCounseling />
            <KSFooter />
        </>
    )
}
