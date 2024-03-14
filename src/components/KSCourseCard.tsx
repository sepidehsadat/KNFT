import React from 'react'
import Style from './KSCourseCard.module.css'
import stars from "../assets/images/stars.png";
import ethereum from "../assets/images/ethereum.png";
import { CourseRow } from "../rows/CourseRow";

interface IProps
{
    course: CourseRow;
}
export default function KSCourseCard({ course }: IProps)
{
    return (
        <div className={`${Style.ks_course_card} p-3 mb-4`}>
            <img className="mb-3" src={course.image} alt="course" width="100%" />
            <div className={`mb-3 d-flex justify-content-between`}>
                <h5 className={`${Style.title} mt-2 font-18-bold`}>{course.title}</h5>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                    <img src={ethereum} alt="course" width="auto" />
                    {course.ethereum}
                </div>
            </div>
            <img className="mb-3" src={stars} alt="stars" width="auto" />
        </div>
    )
}
