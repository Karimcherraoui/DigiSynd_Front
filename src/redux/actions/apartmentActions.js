import * as actionTypes from './actionsType'
import ApiService from '../../services/api';

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
    // enqueueSnackbar("Post has been added successfully.", { variant: 'success' })

  } catch (error) {
    // enqueueSnackbar("Error adding post.", { variant: 'error' })

  }
};

export const deleteApart = (apartmentId) => async (dispatch) => {
  try {
    console.log("apartmentId from action ", apartmentId);
    await ApiService.deleteApartment(apartmentId);
    dispatch({ type: actionTypes.DELETE_APARTMENT, payload: apartmentId });
    // enqueueSnackbar("Post deleted successfully.", { variant: 'success' })

  } catch (error) {
    // enqueueSnackbar("Error deleting post.", { variant: 'error' })
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
    // enqueueSnackbar("Post is liked", { variant: 'success' })

  } catch (error) {
//   enqueueSnackbar("Error liking post ", { variant: 'error' })
console.error('Error fetching aparts:', error);
  }
};