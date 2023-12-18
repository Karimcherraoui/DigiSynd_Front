import axios from './config';


const ApiService = {
  
  createApartment: async (apart) => {
    const syndic = JSON.parse(localStorage.getItem("syndic"));
      const token = syndic.token;
    try {
      const res = await axios.post('/apartment/', apart ,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }); 
      return res.data;
    } catch (error) {
      console.error('Error creating apartment try again:');
      throw error;
    }
  },
  getApartments: async () => {
    const syndic = JSON.parse(localStorage.getItem("syndic"));
    const token = syndic.token;
    try {
      const res = await axios.get('/apartment',{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }); 
      return res.data;
    } catch (error) {
      console.error('Error getting apartments:', error);
      throw error;
    }
  },

  getFactures: async (apartmentId) => {
    const syndic = JSON.parse(localStorage.getItem("syndic"));
    const token = syndic.token;
    try {
      const res = await axios.get(`/apartment/facture/${apartmentId}` ,{
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      return res.data;
    } catch (error) {
      console.error('Error getting apartments:', error);
      throw error;
    }
  },
  registerAdmin: async (data) => {
    try {
      const syndic = JSON.parse(localStorage.getItem("syndic"));
      const token = syndic.token;
    const res = await axios.post('/admin/register', data ,{
  headers: {
    Authorization: `Bearer ${token}`
  }
}); 
      return res.data;
    } catch (error) {
      alert('Error creating admin try again');
      throw error;
    }
  },
  loginAdmin: async (data) => {
    try {
      const {data:{admin,token}} = await axios.post('/admin/login', data );
      localStorage.setItem("syndic", JSON.stringify({admin,token}));  
      return admin;
    } catch (error) {
      console.error('Error login try again' , error);
     
      throw error;
    }
  },


  
  updateApartment: async (apartmentId,data) => {
    try {

      const syndic = JSON.parse(localStorage.getItem("syndic"));
      const token = syndic.token;
      const res = await axios.patch(`/apartment/${apartmentId}` , data ,{
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      return res.data;
    } catch (error) {
      console.error(`Error updating post with id ${apartmentId}:`, error);
      throw error;
    }
    
  },
  
  deleteApartment: async (apartmentId) => {
    try {
      const syndic = JSON.parse(localStorage.getItem("syndic"));
      const token = syndic.token;
      const res = await axios.delete(`/apartment/${apartmentId}` ,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }); 
      return res.data;
    } catch (error) {
      console.error(`Error deleting apartment with id ${apartmentId}:`, error);
      throw error;
    }
  },
  




  payApartment: async (apartmentId) => {
    try {
      
      const syndic = JSON.parse(localStorage.getItem("syndic"));
      const token = syndic.token;
        const {data:apartment} = await axios.patch(`/apartment/pay/${apartmentId}` ,[],{
          headers: {
            Authorization: `Bearer ${token}`
          }
        }); 
        
      return apartment;
    } catch (error) {
      console.error(`Error Pay Apartment with id ${apartmentId}:`, error);
      throw error;
    }
  },

  
};



export default ApiService;
