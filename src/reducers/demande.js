import { fromJS } from 'immutable';

const defaultState = fromJS({

});

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      if (action.store === 'demande') {
        return state.setIn(action.key.concat(['value']), fromJS(action.newValue));
      }
      return state;
    default:
      return state;
  }
}
