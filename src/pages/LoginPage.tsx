import KSInputText from '../components/KSInputText';
import KSButton from '../components/KSButton';
import KSSection from '../components/KSSection';
import { KSRequests } from '../api/KSRequests'

export default function LoginPage()
{
	const handleSubmit = async (): Promise<void> =>
	{
		debugger
		try
		{
			const usersData = await KSRequests.login({ email: "eve.holt@reqres.in", password: "cityslicka" });
			localStorage.setItem('ks_user_token', usersData.token);
		} catch (error)
		{
			console.error("Error during login:", error);
		}
	}
	return (
		<KSSection>
			<figure className='text-center'>
				<h5 className='mb-2'>WellCome back !👋</h5>
				<h3 >Login to your account</h3>
			</figure>
			<KSInputText placeholder={"UserName"} type={"text"} label='User Name' />
			<KSInputText placeholder={"Password"} type={"text"} label='Password' />
			<KSButton title={"Login"} onclick={handleSubmit} />
		</KSSection>
	)
}
