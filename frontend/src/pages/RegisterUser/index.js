import React from "react";

import Nav from "../../components/Nav";

const RegisterUser = () => {
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
                <button>Próximo passo</button>
            </form>
        </section>
    )
}

export default RegisterUser;