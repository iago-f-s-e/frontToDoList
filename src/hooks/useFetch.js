import useSWR from "swr"

export function useFetch(url) {
	const { data, error } = useSWR(url, async responseURL => {
		const response = await fetch(responseURL);
		const data = await response.json();

		return data;
	});

	return { data, error };
}