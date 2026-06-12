import { HttpVerb, type ApiEndpoint } from '../types';

export const supplierEndpoints: ApiEndpoint[] = [
  { uri: '/api/suppliers',        verb: HttpVerb.GET },
  { uri: '/api/suppliers/{id}',   verb: HttpVerb.GET },
  { uri: '/api/suppliers',        verb: HttpVerb.POST },
  { uri: '/api/suppliers/{id}',   verb: HttpVerb.PUT },
  { uri: '/api/suppliers/{id}',   verb: HttpVerb.DELETE },
];
