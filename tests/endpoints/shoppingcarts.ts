import { HttpVerb, type ApiEndpoint } from '../types';

export const shoppingCartEndpoints: ApiEndpoint[] = [
  { uri: '/api/shoppingcarts',        verb: HttpVerb.GET },
  { uri: '/api/shoppingcarts/{id}',   verb: HttpVerb.GET },
  { uri: '/api/shoppingcarts',        verb: HttpVerb.POST },
  { uri: '/api/shoppingcarts/{id}',   verb: HttpVerb.PUT },
  { uri: '/api/shoppingcarts/{id}',   verb: HttpVerb.DELETE },
];
