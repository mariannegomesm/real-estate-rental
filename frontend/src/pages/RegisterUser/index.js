import React, {useState} from "react";

import "./style.scss";
import * as Action from "../../redux/constants";

import Nav from "../../components/Nav";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast, {Toaster} from "react-hot-toast";

const RegisterUser = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const userReducer = useSelector((state) => state.userReducer);

    const [user, setUser] = useState({});

    const SendTo = (route, e) => {
        e.preventDefault();
        
        if(!user.name || !user.email || !user.password || !user.photo){
            toast.error("Por favor, preencha todos os campos obrigatórios!");
            return;
        }
        
        if(user.name && user.email && user.password && user.photo){
            const payload = {...user, ...userReducer}
            dispatch({ type: Action.SAVE_USER_DETAILS, payload: payload});

            history.push(route);
        }
        
    }

    return(
        <section className="register-container">
            <Nav />
            <form>
                <div>
                    <label>* Nome:</label>
                    <input placeholder="Insira seu nome completo" onChange={(e) => setUser({...user, name: e.target.value})}/>
                </div>
                <div className="form-group">
                    <div>
                        <label>* Email:</label>
                        <input placeholder="Insira seu melhor email" onChange={(e) => setUser({...user, email: e.target.value})}/>
                    </div>
                    <div>
                        <label>* Senha:</label>
                        <input placeholder="Insira uma senha forte" onChange={(e) => setUser({...user, password: e.target.value})}/>
                    </div>
                </div>
                <div className="image-container">
                    <label>* Imagem:</label>
                    <input placeholder="Insira o link de sua foto preferida" onChange={(e) => setUser({...user, photo: e.target.value})}/>
                </div>
                <button onClick={(e) => SendTo("/address-user", e)}>Próximo passo</button>
            </form>
            <Toaster position="top-right" />
        </section>
    )
}

export default RegisterUser;