import axios, { AxiosResponse } from "axios";

const base_url = "https://reqres.in/";

export const get = async<T>(url: string, params?: Record<string, any>): Promise<T> =>
{
	try
	{
		const response: AxiosResponse<T> = await axios.get(`${base_url}${url}`, { params });
		return response.data;
	} catch (error)
	{
		console.error('Error in GET request:', error);
		throw error;
	}
}

export const post = async<T,D>(url: string, data?: D): Promise<T> =>
{
	try
	{
		const response: AxiosResponse<T> = await axios.post(`${base_url}${url}`, data)
		return response.data;
	} catch (error)
	{
		console.log('Error in POST request:', error);
		throw error;
	}

}