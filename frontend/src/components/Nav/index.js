import React, { useEffect } from "react";

import "./style.scss";

import { useHistory } from "react-router-dom";

const Nav = () => {
    const nextTopics = [
        {title: "1", href: ""},
        {title: "2", href: "/register-user"},
        {title: "3", href: "/address-user"},
        {title: "4", href: "/success-signing"},
    ]

    const history = useHistory();

    const SendTo = (route) => {
        history.push(route)
    }

    useEffect(() => {
        nextTopics.map((item, index) => {
            if(item.href == history.location.pathname){

                for(let i = 1; i <= index; i++){
                    const element = document.getElementById(i);
                    element.classList.add("completed");
                }

                const nextElement = document.getElementById(index + 1);
                nextElement.classList.add("active");
            }
        })
    }, [history.location.pathname])
    
    return(
        <>
            <div className="flex title-container">
                <span class="material-icons-outlined">home</span>
                <h1>Meu controle</h1>
            </div>

            <div class="stepper-wrapper">
                {nextTopics.map((topic, index) => (
                    <div id={index + 1} class="stepper-item" onClick={() => SendTo(topic.href)}>
                        <div class="step-counter">{topic.title}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Nav;