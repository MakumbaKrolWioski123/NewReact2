import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CodeSnippet from './components/CodeSnippet.jsx'
import DateTimeCard from './components/DateTimeCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>New React</h1>
    <h2 style={{ color: 'yellow' }}>Dział 2:</h2>
    <App />
    <h2 style={{ color: 'yellow' }}>Dział 3</h2>
    <DateTimeCard />
    <CodeSnippet title='Przykładowy kod' language='JavaScript' code='const seconds = new Date().getSeconds(); '/>
  </StrictMode>,
)
