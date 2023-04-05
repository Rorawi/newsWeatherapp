const initialState = {
    weatherData: null
  };

const PropReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'SET_DATA':
          return {
            ...state,
            weatherData: action.payload
          };
        default:
          return state;
      }
}


export default PropReducer;
