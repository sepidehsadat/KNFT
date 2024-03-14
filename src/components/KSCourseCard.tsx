import React from 'react'
import Style from './KSCourseCard.module.css'
import course1 from "../assets/images/course1.png";
import { CourseRow } from "../rows/CourseRow";

interface IProps
{
    course: CourseRow;
}
export default function KSCourseCard({ course }: IProps)
{
    return (
        <div className={`${Style.ks_course_card} p-3 mb-4`}>
            <img className="mb-3" src={course1} alt="course" width="100%" />
            <h5 className={`${Style.title} mb-2 font-18-bold`}>{course.title}</h5>
            <p className={`${Style.description} mb-4 font-14-normal-400`}>فرمول هک فروش در واقع یعنی میانبر زدن از شیوه‌های معمول فروش و جذب مشتری، به شیوه‌هایی سریع‌تر، کارآمدتر و کم‌هزینه‌تر است.</p>
            <p className={`${Style.more} mb-4 font-14-normal-500 color-purple text-center`}>مشاهده دوره</p>
        </div>
    )
}
