import React from "react";

import "./style.scss";
import Nav from "../../components/Nav";

const AddressUser = () => {
    return(
        <section className="address-container">
            <Nav />
            <form>
                <div>
                    <label>* Rua:</label>
                    <input placeholder="Insira o nome de sua rua"/>
                </div>
                <div className="form-group">
                    <div>
                        <label>* Cidade:</label>
                        <input placeholder="Insira sua cidade"/>
                    </div>
                    <div>
                        <label>* Estado:</label>
                        <input placeholder="Insira seu estado"/>
                    </div>
                </div>
                <div>
                    <label>* CEP:</label>
                    <input placeholder="Insira seu código postal"/>
                </div>
                <button>Próximo passo</button>
            </form>
        </section>
    )
}

export default AddressUser;