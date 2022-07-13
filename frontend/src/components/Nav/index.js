import React from "react";

import "./style.scss";

const Nav = () => {
    return(
        <div class="stepper-wrapper">
            <div class="stepper-item active completed">
                <div class="step-counter">1</div>
            </div>
            <div class="stepper-item">
                <div class="step-counter">2</div>
            </div>
            <div class="stepper-item">
                <div class="step-counter">3</div>
            </div>
            <div class="stepper-item">
                <div class="step-counter">4</div>
            </div>
        </div>
    )
}

export default Nav;