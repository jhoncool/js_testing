const key = 'js_testing_state'

export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem(key);
    if (serializedState == null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};

export const saveState = (state) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    console.error(`данные в localeStorage не сохранены: ${err}`);
  }
}

export const saveStatePlugin = (store) => {
  store.subscribe((mutation, state) => {
    if (state.localStorage == null) {
      throw new Error('Чтобы использовать плагин, заведите в state поле localStorage')
      return
    }
    saveState(state.localStorage)
  })  
}
