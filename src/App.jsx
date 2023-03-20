
import './App.scss'
import { About, Contact, Footer, Header, Navbar, Skills, Testimonials, Work } from './components'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
