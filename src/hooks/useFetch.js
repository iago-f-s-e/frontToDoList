
import useSWR from "swr"
import api from "../services/api";

export function useFetch(url) {
	const { data, error } = useSWR(url, async responseURL => {
		const response = await api.get(responseURL);

		return response.data;
	});

	return { data, error };
}