export function ok(body: unknown) {
	return {
		statusCode: 200,
		body: body
	};
}

export function badRequest(error: Error) {
	return {
		statusCode: 400,
		body: {
			error: error.message
		}
	};
}

export function serverError() {
	return {
		statusCode: 500,
		body: {
			error: 'Internal server error'
		}
	};
}