import * as actionTypes from "../actions/actionsType";

const initialState = {
  selectedApartment: null,
  apartments: [],
  factures: [],
};

const apartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_APARTMENTS:
      return { ...state, apartments: action.payload };

    case actionTypes.ADD_APARTMENT:
      return { ...state, apartments: [...state.apartments, action.payload] };

    case actionTypes.UPDATE_APARTMENT:
      console.log(action.payload._id);
      console.log(state.apartments);
      return {
        ...state,
        apartments: state.apartments.map((apartment) =>
          apartment._id === action.payload._id
           ? {...apartment , ...action.payload }
           : apartment
        ),
      };

    case actionTypes.SELECT_APARTMENT:
      console.log(action.payload);
      return {
        ...state,
        selectedApartment: {...action.payload},
      };

    // case actionTypes.CLEAR_SELECTEDPOST:
    //   return {
    //     ...state,
    //     selectedPost: null,
    //   };

    // case actionTypes.CLEAR_FORM:
    //   return {
    //     ...state,
    //     selectedPost: null,
    //   };
    case actionTypes.DELETE_APARTMENT:
      return {
        ...state,
        apartments: state.apartments.filter(
          (apartment) => apartment._id !== action.payload
        ),
      };
    case actionTypes.PAY_APARTMENT:
      return {
        ...state,
        apartments: state.apartments.map((apartment) =>
          apartment._id === action.payload.apartmentID
            ? { ...apartment, isPaid: true }
            : apartment
        ),
        factures: state.factures.map((facture) =>
          facture.apartment === action.payload.apartmentID
            ? { ...facture, paymentFacture: Date.now() }
            : facture
        ),
        
      };

      case actionTypes.GET_FACTURES:

      return { ...state, factures: action.payload };

    default:
      return state;
  }
};

export default apartmentReducer;
