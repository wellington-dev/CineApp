import React from 'react'
import {Link} from 'react-router-dom'
import notFound from '../../assets/notFound.png'

import {Container, ErrorLines, Button} from './styles'


function NotFound() {

  return (
    <Container>
        <ErrorLines>

            <img src={notFound} alt='imagem de erro de pagina' />
            <h1>perdeu seu caminho?</h1>
            <p>Ops! Isto é estranho. Você está procurando por algo que na verdade não existe.</p>

            <Button>
                <Link to='/'>Voltar ao início</Link>
            </Button>

        </ErrorLines>
    </Container>
  )
}

export default NotFound