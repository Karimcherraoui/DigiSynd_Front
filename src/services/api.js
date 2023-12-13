import axios from './config';


const ApiService = {
  
//   createApartment: async (post) => {
//     try {
//       const userData = JSON.parse(localStorage.getItem("user"));
//       const token = userData.token;
//       const res = await axios.post('/post/', post ,{
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       return res.data;
//     } catch (error) {
//       console.error('Error creating post:', error);
//       throw error;
//     }
//   },
  getApartments: async () => {
    try {
      const res = await axios.get('/apartment');
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error('Error getting posts:', error);
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
  
//   deletePost: async (postId) => {
//     try {
//       const userData = JSON.parse(localStorage.getItem("user"));
//       const token = userData.token;
//       const res = await axios.delete(`/post/${postId}` , {
//         headers: {
//           "Authorization": `Bearer ${token}`
//         }
//       });
//       return res.data;
//     } catch (error) {
//       enqueueSnackbar("You can't delete the post", { variant: 'error' })
//       console.error(`Error deleting post with id ${postId}:`, error);
//       throw error;
//     }
//   },
  




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
