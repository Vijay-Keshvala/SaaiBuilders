import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Project'
import Testimonials from './components/Testinomials'
import Newsletter from './components/NewsLetter'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import ContactPage from './pages/Contact'
import ProjectsPage from './pages/Projects'
import ProjectDetailPage from './pages/ProjectDetail'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <About />
            <Projects />
            <Testimonials />
            <Newsletter />
          </>
        } />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/project/details' element={<ProjectDetailPage/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
