import { HttpVerb, type ApiEndpoint } from '../types';

export const orderEndpoints: ApiEndpoint[] = [
  { uri: '/api/orders',        verb: HttpVerb.GET },
  { uri: '/api/orders/{id}',   verb: HttpVerb.GET },
  { uri: '/api/orders',        verb: HttpVerb.POST },
  { uri: '/api/orders/{id}',   verb: HttpVerb.PUT },
  { uri: '/api/orders/{id}',   verb: HttpVerb.DELETE },
];
