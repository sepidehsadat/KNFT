import React from 'react'
import Style from './KSInputText.module.css'

interface IKSInputTextProps
{
	placeholder: string;
	type: string;
	label: string;
}

// interface IState
// {
// 	value: string;
// }
export default function KSInputText(props: IKSInputTextProps)
{
	// const [input, setInput] = useState("");

	// const setValue = (e: React.ChangeEvent<HTMLInputElement>): void =>
	// {
	// 	setInput(e.target.value);
	// }
	// const getValue = (): string =>
	// {
	// 	return input;
	// }
	return (
		<div className={Style.ks_input_text_parent}>
			<label>{props.label}</label>
			<input
				className={Style.ks_input_text}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	)
}









