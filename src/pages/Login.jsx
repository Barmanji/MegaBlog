import React from "react";
import { login as loginComponent} from "../store/authSlice";
function login() {
    return (
        <div className="py-8">  
            <loginComponent/>
        </div>
    )
} 
export default login;

