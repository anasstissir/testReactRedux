export function inputChange(value, key) {
  const [store, ...storeKey] = key.split('.');
  return {
    type: 'INPUT_CHANGE',
    store,
    key: storeKey,
    newValue: value,
  };
}
