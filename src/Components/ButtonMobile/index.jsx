import React from 'react'
import iconsSeacrh from '../../assets/iconsSeacrh.png'
import iconsDelete from '../../assets/iconsDelete.png'
import { useMovies } from '../../Context/MovieContext'

import {Button, Section} from './styles'

function ButtonSearch() {
  const {searchMobileClick, setSeacrhMobileClick} = useMovies()

  return (
    <Section>
      <Button onClick={()=>setSeacrhMobileClick(!searchMobileClick)}>
        {searchMobileClick ? 
        <img src={iconsDelete} alt='icone de delete' /> : 
        <img src={iconsSeacrh} alt='icone de pesquisa' /> }
      </Button>
    </Section>
  )
}
export default ButtonSearch