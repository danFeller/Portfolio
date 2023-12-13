import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App() {
  return (
    <main className='bg-slate-900 text-gray-400'>
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
    </main>
  )
}
