import GlobalStyles from './styles/global'
import MoviesProvider from "./Context/MovieContext"
import Rotas from "./routes"

import {ThemeProvider} from 'styled-components'
import {theme} from './themes/theme'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">

      <ThemeProvider theme={theme}>
      <ToastContainer theme='colored' />

        <MoviesProvider>
            <GlobalStyles/>
            <Rotas/>
        </MoviesProvider>
  
      
      </ThemeProvider>

    </div>
  )
}

export default App
