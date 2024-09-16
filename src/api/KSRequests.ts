import { post } from './KSRequest'

export class KSRequests
{
	static login()
	{
		//Todo
		return post<"", {}>("", {});
	}
}