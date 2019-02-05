import { compose } from 'redux';
import partialRight from 'lodash/partialRight';

export default function composeReducers(...reducers) {
  return (state, action) => compose(...reducers.map((f) => partialRight(f, action)))(state);
}
