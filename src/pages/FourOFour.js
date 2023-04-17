import { Link } from "react-router-dom";

export default function FourOFour() {
    return (
        <div className="page-error">
            <h2>Edit</h2>
            <FourOFour />
            <Link to="/">
                <button>Back to the Home Page</button>
            </Link>
        </div>
    )
}