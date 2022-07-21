import React from "react"
import { Link } from "react-router-dom"
import {LogoContainer} from "./styles"
import {useMovies} from "../../Context/MovieContext"

function Logo() {
  const {setSeacrhMobileClick} = useMovies()

  const disableInput = ()=>{
    setSeacrhMobileClick(false)
  }

  return (
    <LogoContainer onClick={disableInput} >
      <Link to='/'>Cine<span>App</span></Link>
    </LogoContainer>
  )
}

export default Logo