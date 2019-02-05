import { Map, fromJS } from 'immutable';


export default function (state = new Map(), action) {
  switch (action.type) {
    case 'AUTHENTICATE_SUCCESS': {
      return state.withMutations((st) => {
        st.set('status', 'logged');
        st.set('LoggedUser', fromJS(action.result));
      });
    }
    case 'AUTHENTICATE_INVALID': {
      return state.withMutations((st) => {
        st.set('status', 'invalid');
        st.set('redirectUrl', fromJS(action.result.redirectUrl));
      });
    }
    case 'AUTHENTICATE_BAD_ACCOUNT': {
      return state.withMutations((st) => {
        st.set('status', 'bad_account');
        st.set('redirectUrl', fromJS(action.result.redirectUrl));
      });
    }

    default:
      return state;
  }
}
