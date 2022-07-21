import api from "./api";

const API_KEY = "7d0b44ab787c467197003efed20daad2";

const requests = {
  fetchTrending: `/movie/popular?api_key=${API_KEY}&language=pt-BR`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=pt-BR&query=`,

  fetchMoviesList: async (id) => {
    const res = await api.get(`movie/${id}?api_key=${API_KEY}&language=pt-BR`);
    return res.data; 
  },
 
 
  
};

export default requests;