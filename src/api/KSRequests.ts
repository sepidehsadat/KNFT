import { post } from './KSRequest';
import { LoginDataRow, LoginResponceRow } from '../rows/LoginRow';

export class KSRequests
{
	static login(data: LoginDataRow)
	{
		return post<LoginResponceRow, LoginDataRow>("/login", data);
	}
}