import React, { FC, useState } from 'react'
import Style from './KSInputText.module.css'

interface IProps
{
    placeholder: string;
    type: string;
}

interface IState
{
    value: string;
}
export default function KSInputText({ placeholder, type }: IProps)
{
    const [input, setInput] = useState("");

    const setValue = (e: React.ChangeEvent<HTMLInputElement>): void =>
    {
        setInput(e.target.value);
    }
    const getValue = (): string =>
    {
        return input;
    }
    return (
        <div className="form">
            <input
                type={type}
                onChange={setValue}
                className="KS_input_text"
                placeholder={placeholder}
            />
        </div>
    )
}









