/** HTTP verbs used by the OnlineStore API */
export enum HttpVerb {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

/** An API endpoint descriptor combining a URI and the HTTP verb */
export interface ApiEndpoint {
  uri: string;
  verb: HttpVerb;
}
