import React, {useState} from "react";

import "./style.scss";
import * as Action from "../../redux/constants";

import Nav from "../../components/Nav";

import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import AddressUserServices from "./services";

const AddressUser = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [address, setAddress] = useState({});
    const userReducer = useSelector((state) => state.userReducer);

    const RegisterNewUser = async(route, e) => {
        e.preventDefault();

        if(!address.address || !address.city || !address.state || !address.cep){
            return toast.error("Por favor, preencha todos os campos obrigatórios!");
        }

        if(address.address && address.city && address.state && address.cep){
            const payload = {...userReducer, ...address}

            const {data} = await AddressUserServices.newUser(payload);
            if(data){
                dispatch({ type: Action.REMOVE_USER_SAVED});

                return history.push(route);
            }
        }
    }

    return(
        <section className="address-container">
            <Nav />
            <form>
                <div>
                    <label>* Rua:</label>
                    <input placeholder="Insira o nome de sua rua" onChange={(e) => setAddress({...address, address: e.target.value})}/>
                </div>
                <div className="form-group">
                    <div>
                        <label>* Cidade:</label>
                        <input placeholder="Insira sua cidade" onChange={(e) => setAddress({...address, city: e.target.value})}/>
                    </div>
                    <div>
                        <label>* Estado:</label>
                        <input placeholder="Insira seu estado" onChange={(e) => setAddress({...address, state: e.target.value})}/>
                    </div>
                </div>
                <div>
                    <label>* CEP:</label>
                    <input placeholder="Insira seu código postal" onChange={(e) => setAddress({...address, cep: e.target.value})}/>
                </div>
                <button onClick={(e) => RegisterNewUser("/success-signing", e)}>Próximo passo</button>
            </form>
            <Toaster position="top-right"/>
        </section>
    )
}

export default AddressUser;