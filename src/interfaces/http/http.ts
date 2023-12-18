export interface httpRequest {
  body?: unknown;
  headers?: unknown;
  params?: unknown;
  query?: unknown;
}

export interface httpResponse {
  statusCode: number;
  body: unknown;
}