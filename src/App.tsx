import './App.css'
import Header from './components/header/Header'
import Introduction from './components/introduction/Introduction'
import Projects from './components/projects/Projects'
import Information from './components/information/Information'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <main className="main">
        <Introduction />
        <Information />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
