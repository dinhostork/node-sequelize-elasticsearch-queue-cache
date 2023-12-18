import { HttpRequest, HttpResponse } from '../../shared/http/http.protocol';

export interface Controller {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>;
}