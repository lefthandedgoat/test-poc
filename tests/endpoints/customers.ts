import { HttpVerb, type ApiEndpoint } from '../types';

export const customerEndpoints: ApiEndpoint[] = [
  { uri: '/api/customers',        verb: HttpVerb.GET },
  { uri: '/api/customers/{id}',   verb: HttpVerb.GET },
  { uri: '/api/customers',        verb: HttpVerb.POST },
  { uri: '/api/customers/{id}',   verb: HttpVerb.PUT },
  { uri: '/api/customers/{id}',   verb: HttpVerb.DELETE },
];
