import React from "react";

export const Step_3 = () => {
    return (
        <div>
            <div class="text-center">
                <h1>Are you a female or a male ?</h1>
                <p>Select your gender</p>
            </div>
    
            <div class="my-5 genders">
                <div class="gender">
                    <img src="../../assets/img/genders/female.svg" alt=""/>
                    <h6>Female</h6>
                </div>

                <div class="gender">
                    <img src="../../assets/img/genders/male.svg" alt=""/>
                    <h6>Male</h6>
                </div>
            </div>
        </div>
    );
}