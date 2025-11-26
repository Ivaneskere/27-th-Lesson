import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './assets/Header'
import Contacts from './assets/Contacts'
import Form from './assets/Form'
import { ContactProvider } from './contexts/ContactCont.jsx'

function App() {

  return (
    <>
      <div>
        <ContactProvider>
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/forms' element={<Form />} />
            </Routes>
          </BrowserRouter>
        </ContactProvider>
      </div>
    </>
  )
}

export default App