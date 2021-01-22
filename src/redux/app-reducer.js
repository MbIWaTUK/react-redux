import { authThunkCreator } from "./AuthReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:

      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccessActionCreate = () => ({
  type: SET_INITIALIZED
});

export const initializeThunkCreator = () => {

  return (dispatch) => {
    let promise = dispatch(authThunkCreator())
    promise.then(()=>{
        dispatch(initializedSuccessActionCreate())
    })
  };
};



export default appReducer;
