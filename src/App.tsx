import './App.css'
import Header from './components/header/Header'
import Introduction from './components/introduction/Introduction'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <main className="main">
        <Introduction />
      </main>
      <Footer />
    </>
  )
}

export default App
