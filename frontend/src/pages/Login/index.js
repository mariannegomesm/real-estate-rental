import React, { useState } from "react";

import "./style.scss";
import { useHistory } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast"

import LoginServices from "./services";
import LottieFile from "../../components/LottieFile";


const Login = () => {
    const history = useHistory();
    const [userLogged, setUserLogged] = useState({})

    const AccessPlatform = async(route, e) => {
        e.preventDefault();
        
        if(userLogged.email && userLogged.password){
            const {data} = await LoginServices.listUsers();
            const filterUser = data.filter((user) => user.email == userLogged.email && user.password == userLogged.password)
    
            if(filterUser.length > 0){
                return toast.success("Bem vindo(a) a nossa plataforma!")
            }
            else{
                return toast.error("Nenhum usuário encontrado.")
            }
        }

        if(!userLogged.email || !userLogged.password){
            toast.error("Por favor, preencha todos os campos obrigatórios!")
        }

        // history.push(route);
    }

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
                        <label>* Email: </label>
                        <input placeholder="Insira seu melhor email" onChange={(e) => setUserLogged({...userLogged, email: e.target.value})}/>
                    </div>
                    <div>
                        <label>* Senha: </label>
                        <input type="password" placeholder="Insira sua senha super secreta" onChange={(e) => setUserLogged({...userLogged, password: e.target.value})}/>
                    </div>
                    <button onClick={(e) => AccessPlatform("/", e)}>Entrar</button>
                    <p onClick={() => SendTo("/")}>Não possui acesso? Cadastre-se</p>
                </form>
            </div>
            <div className="login-illustration-container">
                <LottieFile name="house" width={280}/>
            </div>
            <Toaster position="top-right"/>
        </section>
    )
}

export default Login;