import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './assets/Header'
import Contacts from './assets/Contacts'
import Form from './assets/Form'
import { ContactProvider } from './contexts/ContactCont.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import LanguageProvider from './contexts/languageContext.jsx'

function App() {

  return (
    <>
      <div>
        <LanguageProvider>
          <ThemeProvider>
            <ContactProvider>
              <BrowserRouter>
                <Header></Header>
                <Routes>
                  <Route path='/contacts' element={<Contacts />} />
                  <Route path='/forms' element={<Form />} />
                </Routes>
              </BrowserRouter>
            </ContactProvider>
          </ThemeProvider>
        </LanguageProvider>
      </div>
    </>
  )
}

export default App