import request from 'superagent';

function call(meta, token) {
  const method = meta.API_METHOD ? meta.API_METHOD : 'GET';
  let req = request(method, meta.API_CALL);
  req = req.set({ Authorization: `Bearer ${token}` });
  if (meta.API_PAYLOAD) {
    req = req.send(meta.API_PAYLOAD);
  }
  if (meta.API_QUERY) {
    req.query(meta.API_QUERY);
  }

  return req;
}

export default store => next => action => {
  const state = store.getState();
  const token = state.account && state.account.get('LoggedUser') ?
    state.account.getIn(['LoggedUser', 'token']) : 'eyJhbGciOiJIUzUxMiJ9';
  if (action.meta && action.meta.API_CALL) {
    call(action.meta, token)
      .timeout(300000)
      .on('abort', () => {
        store.dispatch({
          type: action.meta.API_ERRORS[408],
          result: {
            status: 408,
            message: 'request Timeout',
            error: '408 Timeout error',
          },
        });
      })
      .then((res) => {
        store.dispatch({
          type: action.meta.API_SUCCESS,
          result: res.body,
        });
      })
      .catch(({ status, response }) => {
        if (action.meta.API_ERRORS && action.meta.API_ERRORS[status]) {
          return store.dispatch({
            type: action.meta.API_ERRORS[status],
            result: response.body,
          });
        }
        throw response;
      });
  }
  return next(action);
};
