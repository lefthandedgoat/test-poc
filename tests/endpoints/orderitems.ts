import { HttpVerb, type ApiEndpoint } from '../types';

export const orderItemEndpoints: ApiEndpoint[] = [
  { uri: '/api/orderitems',        verb: HttpVerb.GET },
  { uri: '/api/orderitems/{id}',   verb: HttpVerb.GET },
  { uri: '/api/orderitems',        verb: HttpVerb.POST },
  { uri: '/api/orderitems/{id}',   verb: HttpVerb.PUT },
  { uri: '/api/orderitems/{id}',   verb: HttpVerb.DELETE },
];
