import { useContext } from 'react'
import { ContactContext } from '../contexts/ContactCont.jsx'


export default function Contacts() {

    const { contacts, deleteContact } = useContext(ContactContext)


    return (
        <table className="border-2">
                    <thead className="border-2">
                        <tr>
                            <th>Name</th>
                            <th>lastName</th>
                            <th>NumberOfPhone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {contacts.map((contact) => {
                            return (
                                <tr className="border-2">
                                    <td className="border-2">{contact.firstName}</td>
                                    <td className="border-2">{contact.lastName}</td>
                                    <td className="border-2">{contact.phoneNumber}</td>
                                    <td>
                                        <button type="button" onClick={() => deleteContact(contact.id)}>❌</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
    )
}
