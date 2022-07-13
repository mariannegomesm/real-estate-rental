import React from "react";

import "./style.scss";

import Nav from "../../components/Nav";
import LottieFile from "../../components/LottieFile";

import { useHistory } from "react-router-dom";

const SuccessSigning = () => {
    const history = useHistory();

    const SendTo = (route) => {
        history.push(route);
    }

    return(
        <section className="success-container">
            <Nav />
            <LottieFile name="success" width={400}/>
            <div className="details-success">
                <h1>Sucesso ao cadastrar informações!</h1>
                <p>Para prosseguir, logue-se na plataforma</p>
                <button onClick={() => SendTo("/login")}>Acessar plataforma</button>
            </div>
        </section>
    )
}

export default SuccessSigning;