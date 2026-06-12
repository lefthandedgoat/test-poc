import { HttpVerb, type ApiEndpoint } from '../types';

export const shippingAddressEndpoints: ApiEndpoint[] = [
  { uri: '/api/shippingaddresses',        verb: HttpVerb.GET },
  { uri: '/api/shippingaddresses/{id}',   verb: HttpVerb.GET },
  { uri: '/api/shippingaddresses',        verb: HttpVerb.POST },
  { uri: '/api/shippingaddresses/{id}',   verb: HttpVerb.PUT },
  { uri: '/api/shippingaddresses/{id}',   verb: HttpVerb.DELETE },
];
