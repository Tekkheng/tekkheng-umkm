import './App.css'
import Carousel from './components/carousel'
import Navbar from './components/navbar'
import About from './components/about'
import BestProduct from './components/bestProduct'
import Product from './components/product'
import Gallery from './components/gallery'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <About/>
      <BestProduct/>
      <Product/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
