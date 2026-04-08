import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}

export default App