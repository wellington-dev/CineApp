import api from './api'
const API_KEY = "7d0b44ab787c467197003efed20daad2";

const basicFetch = async (endepoint) => {
    const res = await api.get(`${endepoint}`);
    return await res.data;
  };

const genresApi = {

    getGenresList: async() => {
        return[

            {
                name:'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/movie/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                name:'toprated',
                title: 'Aleatório',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                name:'action',
                title: 'Açâo',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                name:'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                name:'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                name:'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                name:'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
            
                
    },
}

export default genresApi;