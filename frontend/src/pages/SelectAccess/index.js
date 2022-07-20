import React, {useEffect,useRef, useState} from 'react';

import "./style.scss";
import * as Action from "../../redux/constants";

import Nav from "../../components/Nav";

import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

const SelectAccess = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const buttonActive = useRef(false);

    const [isCompany, setIsCompany] = useState(false);

    const NextStep = (route) => {
        dispatch({ type: Action.SAVE_USER_DETAILS, payload: {company: isCompany}});
        history.push(route);
    }

    const SendTo = (route) => {
        history.push(route);
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
                    <button ref={buttonActive} onClick={() => setIsCompany(false)}>
                        <span class="material-icons-outlined">person</span><br/>
                        <label>Para mim</label>
                        <p>Controle seus imóveis alugados e vendidos.</p>
                    </button>
                    <button onClick={() => setIsCompany(true)}>
                        <span class="material-icons-outlined">groups</span><br/>
                        <label>Com meu time</label>
                        <p>Sua equipe tendo acesso ao controle de seus imóveis</p>
                    </button>
                </div>
                <button className="button-next" onClick={() => NextStep("/register-user")}>Próximo passo</button>
                <a onClick={() => SendTo("/login")}>Logar na plataforma</a>
            </div>
        </section>
    )
}

export default SelectAccess;