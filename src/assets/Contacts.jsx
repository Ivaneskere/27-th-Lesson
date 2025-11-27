import { useContext } from 'react'
import { ContactContext } from '../contexts/ContactCont.jsx'


export default function Contacts() {

    const { contacts, deleteContact } = useContext(ContactContext)


    return (
        <table className="w-full border-2 bg-white text-black ">
            <thead className="border-2 bg-gray-200 text-black ">
                <tr className="border-2 dark:border-gray-700">
                    <th className="p-2 border-2 ">Name</th>
                    <th className="p-2 border-2 ">lastName</th>
                    <th className="p-2 border-2 ">NumberOfPhone</th>
                </tr>
            </thead>

            <tbody>
                {contacts.map(contact => (
                    <tr
                        key={contact.id}
                        className="border-2 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
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
