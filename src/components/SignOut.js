import React from 'react';
import { useHistory } from "react-router-dom";

function Logout() {

    const history = useHistory();

    sessionStorage.clear();
    history.push("/");
    history.go(0);

    return(
        <div>
            <h1>Logout</h1>
        </div>
    );
}

export default Logout;