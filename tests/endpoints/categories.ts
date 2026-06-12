import { HttpVerb, type ApiEndpoint } from '../types';

export const categoryEndpoints: ApiEndpoint[] = [
  { uri: '/api/categories',        verb: HttpVerb.GET },
  { uri: '/api/categories/{id}',   verb: HttpVerb.GET },
  { uri: '/api/categories',        verb: HttpVerb.POST },
  { uri: '/api/categories/{id}',   verb: HttpVerb.PUT },
  { uri: '/api/categories/{id}',   verb: HttpVerb.DELETE },
];
