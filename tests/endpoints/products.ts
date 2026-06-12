import { HttpVerb, type ApiEndpoint } from '../types';

export const productEndpoints: ApiEndpoint[] = [
  { uri: '/api/products',        verb: HttpVerb.GET },
  { uri: '/api/products/{id}',   verb: HttpVerb.GET },
  { uri: '/api/products',        verb: HttpVerb.POST },
  { uri: '/api/products/{id}',   verb: HttpVerb.PUT },
  { uri: '/api/products/{id}',   verb: HttpVerb.DELETE },
];
