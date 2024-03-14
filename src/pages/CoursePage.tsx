import React from 'react'
import KSHeader from '../components/KSHeader';
import KSFooter from '../components/KSFooter';
import KSBanner from '../components/KSBanner';
import KSCourseCard from '../components/KSCourseCard';
import KSCounseling from '../components/KSCounseling';
import { CourseRow } from "../rows/CourseRow";
let courses: CourseRow[] = [
    {
        title: "جهش ثروت",
        description: "خیلی وقت هست درآمدت روی یک عددی قفل شده و بیشتر نمیشه؟ دوست داری بدونی دلیلش چیه و چطور باید این مشکل رو حل کنی؟"
    },
    {
        title: " کسب و کار اینستاگرامی ۱۴۰۲",
        description: "در دوره کسب و کار اینستاگرامی ۰ تا ۱۰۰ شروع تا رسیدن به درآمد از اینستاگرام را به شما آموزش میدهیم."
    },
    {
        title: "هک فروش",
        description: "هک فروش"
    },
    {
        title: "جهش ثروت",
        description: "خیلی وقت هست درآمدت روی یک عددی قفل شده و بیشتر نمیشه؟ دوست داری بدونی دلیلش چیه و چطور باید این مشکل رو حل کنی؟"
    },
    {
        title: " کسب و کار اینستاگرامی ۱۴۰۲",
        description: "در دوره کسب و کار اینستاگرامی ۰ تا ۱۰۰ شروع تا رسیدن به درآمد از اینستاگرام را به شما آموزش میدهیم."
    },
    {
        title: "هک فروش",
        description: "هک فروش"
    },
    
]
export default function CoursePage()
{
    return (
        <>
            <KSHeader />
            <KSBanner />
            <div className='container'>
                <div className='row my-5'>
                    <h5 className='course-page-title mb-4 '>دوره های خودساخته</h5>
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
