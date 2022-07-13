import React from "react";

import "./style.scss";

import Nav from "../../components/Nav";
import LottieFile from "../../components/LottieFile";

const SuccessSigning = () => {
    return(
        <section className="success-container">
            <Nav />
            <LottieFile name="success" width={400}/>
            <div className="details-success">
                <h1>Sucesso ao cadastrar informações!</h1>
                <p>Para prosseguir, logue-se na plataforma</p>
                <button>Acessar plataforma</button>
            </div>
        </section>
    )
}

export default SuccessSigning;