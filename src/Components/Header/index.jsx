import React from 'react'
import Menu from '../Menu'
import Search from '../../Pages/Search'
import Logo from '../Logo'
import ButtonMobile from '../ButtonMobile'
import SearchMobile from '../../Pages/SearchMobile'
import { useMovies } from '../../Context/MovieContext'

import {Container, NavBar, NavMenu, HamburgueMenu} from './styles'

function Header() {

  const {click, setClick} = useMovies()
  
  return (
    <Container>
        <NavBar>
          <Logo/>

              <HamburgueMenu click={click} onClick={()=>setClick(!click)}>
               <span/>
               <span/>
               <span/>
              </HamburgueMenu>

            <NavMenu>
                <Menu click={click}  />  
            </NavMenu>


                <ButtonMobile /> 
                <Search />
        </NavBar>
            
        <SearchMobile /> 
    </Container>
  )
}

export default Header