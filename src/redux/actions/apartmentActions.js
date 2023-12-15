import * as actionTypes from './actionsType'
import ApiService from '../../services/api';
import toast from '../../components/toast/toast';

export const getApartments = () => async (dispatch) => {
    try {
      const apartments = await ApiService.getApartments();
      console.log("from apart action " ,apartments);
      dispatch({ type: actionTypes.GET_APARTMENTS, payload: apartments });

    } catch (error) {
    //   enqueueSnackbar("Error liking post ", { variant: 'error' })
      console.error('Error fetching apartments:', error);
    }
  };



//   export const clearSelectedPost = () => {
//     return {
//       type: actionTypes.CLEAR_SELECTEDPOST,
//     };
//   }
  

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
    console.log("apartmentId from action ", apartmentId);
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



// export const updatePost = ({_id:postId , ...post} ) => async (dispatch) => {
//   try {
//    const updatedPost = await ApiService.updatePost(postId, post);
//     dispatch({ type: actionTypes.UPDATE_POST, payload: updatedPost });
//     // enqueueSnackbar("Post updated successfully.", { variant: 'success' })

//   } catch (error) {
//     enqueueSnackbar("Error updating post.", { variant: 'error' })

//   }
// };

// export const selectPost =  (post) => {
// //   enqueueSnackbar("Post is selected", { variant: 'success' })

//   return {
    
//     type: actionTypes.SELECT_POST,
//     payload: post
//   }
// };



export const payApartment = (apartmentID) => async (dispatch) => {
  try {
   const apartment = await ApiService.payApartment(apartmentID );
    dispatch({ type: actionTypes.PAY_APARTMENT, payload: {apartmentID} });
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