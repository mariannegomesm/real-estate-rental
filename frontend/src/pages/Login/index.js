import React from "react";

import "./style.scss";

import { useHistory } from "react-router-dom";
import LottieFile from "../../components/LottieFile";

const Login = () => {
    const history = useHistory();

    const SendTo = (route) => {
        history.push(route);
    }

    return(
        <section className="login-container">
            <div className="login-form-container">
                <form>
                    <h2>Bem vindo(a)!</h2>
                    <p>Plataforma de controle de alugueis de imóveis</p>
                    <div>
                        <label>Email: </label>
                        <input placeholder="Insira seu melhor email"/>
                    </div>
                    <div>
                        <label>Senha: </label>
                        <input placeholder="Insira sua senha super secreta"/>
                    </div>
                    <button>Entrar</button>
                    <p onClick={() => SendTo("/")}>Não possui acesso? Cadastre-se</p>
                </form>
            </div>
            <div className="login-illustration-container">
                <LottieFile name="house" width={280}/>
            </div>
        </section>
    )
}

export default Login;