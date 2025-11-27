import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContactContext } from '../contexts/ContactCont.jsx'
import { useContext } from "react"
import { LanguageContext } from "../contexts/languageContext.jsx"

export default function Form() {

    const { addContact } = useContext(ContactContext)
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
    const { texts } = useContext(LanguageContext )

    return (
        <form onSubmit={handleSubmit}>
            <div className="gap-3">
                <input className="border-2 rounded-2xl p-1" name="firstName" type="text" placeholder={texts.firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input className="border-2 rounded-2xl p-1" name="LastName" type="text" placeholder={texts.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input className="border-2 rounded-2xl p-1" name="PhoneNumber" type="text" placeholder={texts.phone} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                <button className="p-2 rounded-full bg-gray-200 text-black" type="submit" >{texts.addNew}</button>
                <button className="p-2 rounded-full bg-gray-200 text-black" type="button" onClick={deleteInfo}>{texts.delInfo}</button>
            </div>
        </form>
    )
}
