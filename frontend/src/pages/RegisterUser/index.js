import React from "react";

import Nav from "../../components/Nav";

import { useHistory } from "react-router-dom";

const RegisterUser = () => {
    const history = useHistory();
    
    const SendTo = (route) => {
        history.push(route);
    }

    return(
        <section className="register-container">
            <Nav />
            <form>
                <div>
                    <label>* Nome:</label>
                    <input placeholder="Insira seu nome completo"/>
                </div>
                <div>
                    <label>* Email:</label>
                    <input placeholder="Insira seu melhor email"/>
                </div>
                <div>
                    <label>* Senha:</label>
                    <input placeholder="Insira uma senha forte"/>
                </div>
                <button onClick={() => SendTo("/address-user")}>Próximo passo</button>
            </form>
        </section>
    )
}

export default RegisterUser;