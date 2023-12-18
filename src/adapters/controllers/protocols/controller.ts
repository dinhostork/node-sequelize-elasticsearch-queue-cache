import { httpRequest, httpResponse } from '../../../interfaces/http/http';

export interface Controller {
    handle: (httpRequest: httpRequest) => Promise<httpResponse>;
}