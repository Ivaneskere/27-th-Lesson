import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div>
            <header>
                <Link to="/contacts"><button> Contacts </button></Link>
                <Link to="/forms"><button> Add Contacts </button></Link>   
            </header>
        </div>
    )
}
