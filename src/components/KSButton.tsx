import React from 'react'
import Style from './KSButton.module.css'
interface IProps
{
  title: string;
  onclick: React.MouseEventHandler<HTMLButtonElement>;
}

interface IState
{ }
export default function KSButton({ onclick, title }: IProps)
{
  return (
    <button onClick={onclick} className={`${Style.ks_button} font-14-normal-500`}>{title}</button>
  )
}
