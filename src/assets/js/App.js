import './../css/App.css'
import ErrorBoundry from './errorBoundry.js'
import {useEffect} from 'react'
import Favicon from 'react-favicon'
import favicon from './../img/favicon.ico'
import Nav from './UI/nav/nav.js'
import Header from './UI/header/header.js'
import Main from './UI/main/main.js'
import Footer from './UI/footer/footer.js'

function App() {
  useEffect(() => {
    document.title = "Edusity"
  })
  return (
    <ErrorBoundry>
      <Favicon 
        url={[favicon]}
        iconSize={64}
      />
      <Nav />
      <Header />
      <Main />
      <Footer />
    </ErrorBoundry>
  )
}

export default App
