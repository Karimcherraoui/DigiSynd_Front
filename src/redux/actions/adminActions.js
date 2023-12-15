import * as actionTypes from './actionsType'
import ApiService from '../../services/api';
import toast from '../../components/toast/toast';



export const registerAdmin = (data) => async (dispatch) => {
    try {
      const admin = await ApiService.registerAdmin(data);
      dispatch({ type: actionTypes.REGISTER, payload: admin });
        toast({
            title: 'Success',
            description: 'The Syndic created successfully.',
            status: 'success',
     
        });

    } catch (error) {
      console.error('Error fetching admin:', error);
        toast({
            title: 'Error',
            description: 'Error during creating admin. Please try again.',
            status: 'error',
     
        });
    }
  };

 
export const loginAdmin = (data,navigate) => async (dispatch) => {

    try {
      const admin = await ApiService.loginAdmin(data);
      dispatch({ type: actionTypes.LOGIN, payload: admin });

      toast({
        title: 'Success',
        description: 'Login successfully.',
        status: 'success',
   
      });
      navigate('/dashboard')

    } catch (error) {
      toast({
        title: 'Error',
        description: 'Wrong email or password . Please try again.',
        status: 'error',
   
      });
    }
  };

  export const logout = () => async (dispatch) => {

    try {
      localStorage.removeItem("syndic")
      dispatch({ type: actionTypes.LOGOUT })
      toast({
        title: 'Success',
        description: 'Logout successfully.',
        status: 'success',
   
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Logout failed . Please try again.',
        status: 'error',
   
      });
    }
  }




