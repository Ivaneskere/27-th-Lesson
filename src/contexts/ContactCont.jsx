import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const ContactContext = createContext();

export function ContactProvider({children}) {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        async function LoadContacts() {
            try {
                const res = await fetch('/data.json')
                const data = await res.json()
                setContacts(data)
            } catch (err) {
                console.log(err)
            }
        }

        LoadContacts()
    }, [])

    function addContact(newContact) {
        setContacts([...contacts, newContact])
    }

    const deleteContact = (id) => {
        const newArr = contacts.filter((contact) => contact.id !== id)
        setContacts(newArr)
    }
    return (
        <ContactContext.Provider value={{contacts, addContact, deleteContact}}>
            {children}
        </ContactContext.Provider>
    )
}
