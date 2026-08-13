import './App.css'
import Header from './components/header/Header'
import Introduction from './components/introduction/Introduction'
import Information from './components/information/Information'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <main className="main">
        <Introduction />
        <Information />
      </main>
      <Footer />
    </>
  )
}

export default App
