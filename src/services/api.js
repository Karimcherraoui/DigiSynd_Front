import axios from './config';


const ApiService = {
  
  createApartment: async (apart) => {
    try {
      const res = await axios.post('/apartment/', apart );
      return res.data;
    } catch (error) {
      console.error('Error creating apartment try again:');
      throw error;
    }
  },
  getApartments: async () => {
    try {
      const res = await axios.get('/apartment');
      return res.data;
    } catch (error) {
      console.error('Error getting apartments:', error);
      throw error;
    }
  },
  
//   updatePost: async (postId,data) => {
//     try {
//       const userData = JSON.parse(localStorage.getItem("user"));
//       const token = userData.token;
//       const res = await axios.patch(`/post/${postId}` , data ,{
//         headers: {
//           "Authorization": `Bearer ${token}`
//         },
//       });
//       return res.data;
//     } catch (error) {
//       console.error(`Error updating post with id ${postId}:`, error);
//       throw error;
//     }
    
//   },
  
  deleteApartment: async (apartmentId) => {
    try {
    
      const res = await axios.delete(`/apartment/${apartmentId}` );
      return res.data;
    } catch (error) {
      // enqueueSnackbar("You can't delete the apartment", { variant: 'error' })
      console.error(`Error deleting apartment with id ${apartmentId}:`, error);
      throw error;
    }
  },
  




  payApartment: async (apartmentId) => {
    try {
 
        const {data:apartment} = await axios.patch(`/apartment/pay/${apartmentId}`
        )
      return apartment;
    } catch (error) {
      console.error(`Error Pay Apartment with id ${apartmentId}:`, error);
      throw error;
    }
  },

  
};



export default ApiService;
