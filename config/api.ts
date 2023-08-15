export const api = async ({
	url,
	method = 'GET',
	contentType = 'application/json',
	isAuth = false,
	body,
}: {
	url: string;
	method?: string;
	contentType?: string;
	isAuth?: boolean;
	body?: any;
}) => {
	const response = await fetch(`${process.env.APP_API}/api/${url}`, {
		method,
		mode: 'cors',
		credentials: 'omit',
		headers: {
			'content-type': contentType,
			...(isAuth &&
				localStorage.getItem('accessToken') && {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				}),
		},
		body: JSON.stringify(body),
		cache: 'no-cache',
	});

	return response.json();
};
