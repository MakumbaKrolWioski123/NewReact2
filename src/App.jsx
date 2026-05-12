import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header';
import DateTimeCard from './components/DateTimeCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1>Szymon Wlaź</h1>
        <p>Nie wiem co ja robie</p>
        <Header />
        <p>Kod komponentu trzymany jest w osobnym pliku poniewaz pozwala to na lepsze organizowanie i skracanie kodu</p>
      </section>
    </>
  )
}

export default App
