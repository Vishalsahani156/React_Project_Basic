import { useContext } from "react";
import { useState } from "react";
import UserContext from './contex/UserContex.js'
function Profile() {
    const [username, setUsername] = useState();
    const [password, setpassword] = useState();

    const userSet = useContext(UserContext);
    const onSubmit = (e) => {
        e.preventDefault();
        userSet({ username, password });
    }
    return (
        <div>
            <h2>Login user </h2>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"

            />
            {""}

            <input type="text"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="password"
            />
            <button>
                onClick={onSubmit}
                Submit
            </button>
        </div >
    )

}

export default Profile;
