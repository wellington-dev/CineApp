import api from "./api";
const API_KEY = "7d0b44ab787c467197003efed20daad2";

const basicFetch =  async (endepoint) => {
  const res = await api.get(`${endepoint}`);
  return await res.data;
};


const tmdbApi = {
  
  getHomeList: async () => {
    return [
      {
        name: "popular",
        title: "Em Alta",
        items: await basicFetch(`/trending/movie/day?language=pt-BR&api_key=${API_KEY}`),
      },
     
      {
        name:'comedy',
        title: 'Adicionado Recentemente',
        items:await basicFetch(`/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      },
      {
        name: "originals",
        title: "filmes online",
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
    
    ];
  },
  getMovieInfo: async(movieId, type)=>{

    let info = {};

    if(movieId){
      switch(type){

        case 'movie' :
          info = await basicFetch(`movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
        break;
        default:
         info = null
      }
    }
    return info;
  }
  
}

export default tmdbApi;