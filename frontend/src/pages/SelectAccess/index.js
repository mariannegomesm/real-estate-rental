import React, {useEffect, useRef} from 'react';

import "./style.scss";
import Nav from "../../components/Nav";

import { useHistory } from 'react-router-dom';

const SelectAccess = () => {
    const history = useHistory();

    const buttonActive = useRef(false);

    const SendTo = (route) => {
        history.push(route)
    }

    useEffect(() => {
        buttonActive.current.focus();   
    }, []);

    return(
        <section className="select-access-container">
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
                <button className="button-next" onClick={() => SendTo("/register-user")}>Próximo passo</button>
                <a>Logar na plataforma</a>
            </div>
        </section>
    )
}

export default SelectAccess;