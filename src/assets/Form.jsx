import { useState } from "react"
import { useNavigate, useContext } from "react-router-dom"
import { ContactContext } from '../contexts/ContactCont.jsx'

export default function Form() {

    const { addContact} = useContext(ContactContext)
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newContact = {
            id: crypto.randomUUID(),
            firstName,
            lastName,
            phoneNumber
        }

        addContact(newContact)
        deleteInfo()
        navigate('/contacts')
    }

    const deleteInfo = () => {
        setFirstName(""),
            setLastName(""),
            setPhoneNumber("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" type="text" placeholder="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input name="LastName" type="text" placeholder="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input name="PhoneNumber" type="text" placeholder="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

            <button type="submit" >Add new contact</button>
            <button type="button" onClick={deleteInfo}>delete info</button>
        </form>
    )
}
