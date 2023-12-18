export function ok(body: unknown) {
	return {
		statusCode: 200,
		body: body
	};
}