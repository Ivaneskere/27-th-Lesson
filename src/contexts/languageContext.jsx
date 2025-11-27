import { createContext, useState } from 'react'

export const LanguageContext = createContext()

export default function LanguageProvider({ children }) {

    const [lang, setLang] = useState("ua")
    const toggleLanguage = (newLang) => {
        setLang(newLang)
    }
    const translation = {
        ua: {
            contact: "Контакти",
            add: "Додати контакт",
            firstName: "Ім'я",
            lastName: "Прізвище",
            phone: "Номер телефону",
            addNew: "Додати контакт",
            delInfo: "Видалити інформацію"
        },
        en: {
            contact: "Contacts",
            add: "Add Contact",
            firstName: "First Name",
            lastName: "Last Name",
            phone: "Phone Number",
            addNew: "Add new contact",
            delInfo: "delete info"
        }
    }
    const texts = translation[lang]

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, texts }}>
            {children}
        </LanguageContext.Provider>
    )
}
