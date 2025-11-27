import { useContext } from 'react'
import { ContactContext } from '../contexts/ContactCont.jsx'
import { LanguageContext } from '../contexts/languageContext.jsx'


export default function Contacts() {

    const { contacts, deleteContact } = useContext(ContactContext)
    const { texts } = useContext(LanguageContext)


    return (
        <table className="w-full border-2 bg-white text-black ">
            <thead className="border-2 bg-gray-200 text-black ">
                <tr className="border-2 ">
                    <th className="p-2 border-2 ">{texts.firstName}</th>
                    <th className="p-2 border-2 ">{texts.lastName}</th>
                    <th className="p-2 border-2 ">{texts.phone}</th>
                </tr>
            </thead>

            <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id} className="border-2 ">
                        <td className="p-2 border-2">{contact.firstName}</td>
                        <td className="p-2 border-2">{contact.lastName}</td>
                        <td className="p-2 border-2">{contact.phoneNumber}</td>
                        <td className="p-2 border-2">
                            <button type="button" onClick={() => deleteContact(contact.id)}>❌</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
