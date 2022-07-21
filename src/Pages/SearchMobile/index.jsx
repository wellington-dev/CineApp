import React from 'react'
import Search from '../Search'
import { useMovies } from '../../Context/MovieContext'
import {Container, AreaList, MobileContainer} from './styles'

function SearchMobile() {
  const {searchMobileClick} = useMovies()

  
  return (
    <Container>
      <AreaList>
          <MobileContainer  searchMobileClick={searchMobileClick}>
              <Search />
          </MobileContainer>
      </AreaList>
   
    </Container>
  )
}

export default SearchMobile