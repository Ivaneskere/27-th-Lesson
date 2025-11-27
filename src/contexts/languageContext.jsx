import { createContext, useState } from 'react'

export const LanguageContext = createContext()

export default function LanguageProvider({ children }) {

    const [lang, setlang] = useState("ua")
    const toggleLanguage = () => {
        if (lang === 'ua') {
            setlang('en')
        } else {
            setlang('ua')
        }
    }
    const translation = {
        ua: {
            contact: "Контакти",
            add: "Додати контакт",
            firstName: "Ім'я",
            lastName: "Прізвище",
            phone: "Номер телефону"
        },
        en: {
            contact: "Contacts",
            add: "Add Contact",
            firstName: "First Name",
            lastName: "Last Name",
            phone: "Phone Number",
        }
    }
    const texts = translation[lang]

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, texts }}>
            {children}
        </LanguageContext.Provider>
    )
}
