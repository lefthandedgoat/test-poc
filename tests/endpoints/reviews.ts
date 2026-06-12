import { HttpVerb, type ApiEndpoint } from '../types';

export const reviewEndpoints: ApiEndpoint[] = [
  { uri: '/api/reviews',        verb: HttpVerb.GET },
  { uri: '/api/reviews/{id}',   verb: HttpVerb.GET },
  { uri: '/api/reviews',        verb: HttpVerb.POST },
  { uri: '/api/reviews/{id}',   verb: HttpVerb.PUT },
  { uri: '/api/reviews/{id}',   verb: HttpVerb.DELETE },
];
