export const chatReducer = (state, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_CONTACT':
        return { ...state, activeContact: action.payload };
      case 'ADD_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload]
        };
      default:
        return state;
    }
  };
