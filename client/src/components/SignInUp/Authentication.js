import React, {useState} from "react";
// import '../App.css';
import SignIn from "./SignIn";
import Register from "./Register";
function Authentication() {
    const [currentForm, setCurrentForm] = useState('signin');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="App">
            {
                currentForm === "signin" ? <SignIn onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    );
}

export default Authentication