import * as actionTypes from "../actions/actionsType";

const initialState = {
  selectedApartment: null,
  apartments: [],
};

const apartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_APARTMENTS:
      return { ...state, apartments: action.payload };

    // case actionTypes.ADD_POST:
    //   return { ...state, posts: [...state.posts, action.payload.post] };

    // case actionTypes.UPDATE_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.map((post) =>
    //       post._id === action.payload._id
    //         ? { ...post, ...action.payload }
    //         : post
    //     ),
    //   };

    // case actionTypes.SELECT_POST:
    //   return {
    //     ...state,
    //     selectedPost: action.payload,
    //   };

    //   case actionTypes.CLEAR_SELECTEDPOST:
    //     return {
    //       ...state,
    //       selectedPost: null,
    //     };

    // case actionTypes.CLEAR_FORM:
    //   return {
    //     ...state,
    //     selectedPost: null,
    //   };
    // case actionTypes.DELETE_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.filter((post) => post._id !== action.payload),
    //   };
    case actionTypes.PAY_APARTMENT:

      return {
        ...state,
    apartments: state.apartments.map((apartment) =>
      apartment._id === action.payload.apartmentID
        ? {...apartment, isPaid: true }
        : apartment
    ),
      };

    default:
      return state;
  }
};

export default apartmentReducer;
