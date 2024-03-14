import React from 'react'
import Style from './KSButtonGray.module.css'
interface IProps {
  title: string;
}
export default function KSButtonGray({ title }: IProps) {
  return (
    <button className={`${Style.ks_button} font-10-normal-500`}>{title}</button>
  )
}
