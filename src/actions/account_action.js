export const INIT_APP = {
  type: 'INIT_APP',
};

export function validateUser(token) {
  return {
    meta: {
      API_METHOD: 'POST',
      API_CALL: 'api/validateUser',
      API_SUCCESS: 'AUTHENTICATE_SUCCESS',
      API_PAYLOAD: token,
      API_ERRORS: {
        500: 'AUTHENTICATE_INVALID',
        401: 'AUTHENTICATE_INVALID',
        403: 'AUTHENTICATE_BAD_ACCOUNT',
        408: 'AUTHENTICATE_BAD_ACCOUNT',
        400: 'AUTHENTICATE_BAD_ACCOUNT',
      },
    },
    type: 'AUTHENTICATE_REQUEST',
  };
}
