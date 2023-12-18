import * as actionTypes from './actionsType'
import ApiService from '../../services/api';
import toast from '../../components/toast/toast';

export const getApartments = () => async (dispatch) => {
    try {
      const apartments = await ApiService.getApartments();
      dispatch({ type: actionTypes.GET_APARTMENTS, payload: apartments });

    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };
  export const getFactures = (id) => async (dispatch) => {
    console.log(id);
    try {
      const factures = await ApiService.getFactures(id);
      console.log("factures",factures);
      dispatch({ type: actionTypes.GET_FACTURES, payload: factures });

    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

export const addApartment = (data) => async (dispatch) => {

  try {
    const newApartment = await ApiService.createApartment({...data });
    dispatch({ type: actionTypes.ADD_APARTMENT, payload: newApartment });
    toast({
      title: 'Success',
      description: 'The apartment created successfully.',
      status: 'success',

  });

  } catch (error) {
    console.error('Error fetching apartments:', error);
    toast({
      title: 'Error',
      description: 'Error during creating apartment. Please try again.',
      status: 'error',

  });

  }
};

export const deleteApart = (apartmentId) => async (dispatch) => {
  try {
    await ApiService.deleteApartment(apartmentId);
    dispatch({ type: actionTypes.DELETE_APARTMENT, payload: apartmentId });
    toast({
      title: 'Success',
      description: 'The apartment deleted successfully.',
      status: 'success',
    })
  } catch (error) {
    console.error('Error fetching aparts:', error);
    toast({
      title: 'Error',
      description: 'You can not delete this apartment. Please try again.',
      status: 'error',
    })
  }
};



export const updateApartment = (apartmentId , data) => async (dispatch) => {
  try {
    console.log(apartmentId , data);
   const updatedApartment = await ApiService.updateApartment(apartmentId,data);
   console.log(updatedApartment);
    dispatch({ type: actionTypes.UPDATE_APARTMENT, payload: updatedApartment });
    toast({
      title: 'Success',
      description: 'The apartment updated successfully.',
      status: 'success',
    })

  } catch (error) {
    console.error('Error fetching aparts:', error);
    toast({
      title: 'Error',
      description: 'You can not update this apartment. Please try again.',
      status: 'error',
    })

  }
};

export const selectApartment =  (apartment) => {
  console.log(apartment);

  return {
    
    type: actionTypes.SELECT_APARTMENT,
    payload: apartment
  }
};



export const payApartment = (apartmentID) => async (dispatch) => {
  try {
    console.log(apartmentID);
   const apartment = await ApiService.payApartment(apartmentID );
   console.log(apartment);
    dispatch({ type: actionTypes.PAY_APARTMENT, payload: { apartmentID} });
    toast({
      title: 'Success',
      description: 'The apartment paid successfully.',
      status: 'success',
    })

    
  } catch (error) {
//   enqueueSnackbar("Error liking post ", { variant: 'error' })
console.error('Error fetching aparts:', error);
toast({
  title: 'Error',
  description: 'You can not pay this apartment. Please try again.',
  status: 'error',
})
  }
};