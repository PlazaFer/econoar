export type BackendResponse<T = unknown> =
  | { status: number, errorMessages: [string], results: T }
  | { status: number, errorMessages: [string], results: null };
