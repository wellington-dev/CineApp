import React from 'react'
import iconsLinkedin from '../../assets/iconsLinkedin.png'
import iconsGithub from '../../assets/iconsGithub.png'


import {Container ,FooterInfor,Footertext} from './styles'

function Footer() {
  return (
    <Container>
        <FooterInfor>

            <a href='https://www.linkedin.com/in/wellingtonqeiroz/' target="_blank">
              <img src={iconsLinkedin} alt='icons do linkedin para ir pro meu linkedin' />
            </a>
            <a href='https://github.com/wellington-dev' target="_blank">
              <img src={iconsGithub}  alt='icons do github para ir pro meu github'/>
            </a>
      
        </FooterInfor>

        <Footertext>
          <span>Desenvolvido por <span className='footer-color'>wellington Queiroz</span></span>
        </Footertext>
        
    </Container>
  )
}

export default Footer