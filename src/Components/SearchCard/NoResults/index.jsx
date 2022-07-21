import React from 'react'

import {useMovies} from '../../../Context/MovieContext'
import {useSearchParams} from 'react-router-dom'
import {ErrorInformation, GuideList, ErrorContainer} from './styles'


function NoResults() {
    const {moviesList} = useMovies(); 

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q")
    
  return (
    <ErrorContainer>
        
          {moviesList.results  && moviesList.results.length === 0 && (
          <ErrorInformation>
              <h1>Nenhum resultado encontrado: {query}</h1>
              <span>Sugestões:</span>

              <GuideList>
                <li>Certifique-se de que todas as palavras estão escritas corretamente.</li>
                <li>Tente palavras-chaves diferentes.</li>
                <li>Tente pesquisar pelo título original ou em Português.</li>
              </GuideList>
          </ErrorInformation>
            )}
    </ErrorContainer>
  )
}

export default NoResults