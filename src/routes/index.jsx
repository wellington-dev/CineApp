import React from 'react'
import Header from '../Components/Header'
import Home from '../Pages/Home'
import Popular from '../Pages/Popular'
import Genres from '../Pages/Genres'
import Favorites from '../Pages/Favorites'
import NotFound from '../Pages/NotFound'
import SearchCard from '../Components/SearchCard'
import CardItem from '../Components/CardItem'
import Footer from '../Components/Footer'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Container} from './styles'

function Rotas() {
  return (
    <BrowserRouter>
      <Container>
        <nav>
            <Header/>
        </nav>

          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/popular' element={<Popular/>} />
              <Route path='/genres' element={<Genres/>} />
              <Route path='/favorites' element={<Favorites/>} />
              <Route path='/searchCard' element={<SearchCard />} />
              <Route path='/cardItem/:id' element={<CardItem />} />

              <Route path='*' element={ <NotFound/> }/>
          </Routes>

          <footer>
              <Footer/>
          </footer>

          </Container>
    </BrowserRouter>
  )
}

export default Rotas