import { HttpVerb, type ApiEndpoint } from '../types';

export const paymentEndpoints: ApiEndpoint[] = [
  { uri: '/api/payments',        verb: HttpVerb.GET },
  { uri: '/api/payments/{id}',   verb: HttpVerb.GET },
  { uri: '/api/payments',        verb: HttpVerb.POST },
  { uri: '/api/payments/{id}',   verb: HttpVerb.PUT },
  { uri: '/api/payments/{id}',   verb: HttpVerb.DELETE },
];
