import React, {useEffect, useRef} from 'react';

import "./style.scss";

import Nav from "../../components/Nav";

const SelectAccess = () => {
    const buttonActive = useRef(false);

    const nextSteps = [
        { title: "1", href: ""},
        { title: "2", href: ""},
        { title: "3", href: ""},
        { title: "4", href: ""},
    ];

    useEffect(() => {
        buttonActive.current.focus();   
    }, []);

    return(
        <section className="select-access-container">
            <div className="flex title-container">
                <span class="material-icons-outlined">home</span>
                <h1>Meu controle</h1>
            </div>
            <Nav />
            <div className="details-login-container">
                <h1>Como planeja utilizar a plataforma?</h1>
                <p>Simplificaremos sua experiência de acordo com a configuração</p>
                <div className='buttons-container'>
                    <button ref={buttonActive}>
                        <span class="material-icons-outlined">person</span><br/>
                        <label>Para mim</label>
                        <p>Controle seus imóveis alugados e vendidos.</p>
                    </button>
                    <button>
                        <span class="material-icons-outlined">groups</span><br/>
                        <label>Com meu time</label>
                        <p>Sua equipe tendo acesso ao controle de seus imóveis</p>
                    </button>
                </div>
                <button className="button-next">Próximo passo</button>
                <a>Logar na plataforma</a>
            </div>
        </section>
    )
}

export default SelectAccess;