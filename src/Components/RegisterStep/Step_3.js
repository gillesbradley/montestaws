import React, { useEffect, useState } from "react";

export const Step_3 = ({userInfo, setUserInfo}) => {
    const [genderSelected, setGenderSelected] = useState(null)

    useEffect(() => {
        userInfo.gender = genderSelected;
    }, [genderSelected])
    
    return (
        <div>
            <div class="text-center">
                <h1>Are you a female or a male ?</h1>
                <p>Select your gender</p>
            </div>
    
            <div class="my-5 genders">
                <div onClick={() => setGenderSelected("f")} class={genderSelected == "f" ? "gender active" : "gender"}>
                    <img src="../../assets/img/genders/female.svg" alt=""/>
                    <h6>Female</h6>
                </div>

                <div onClick={() => setGenderSelected("m")} class={genderSelected == "m" ? "gender active" : "gender"}>
                    <img src="../../assets/img/genders/male.svg" alt=""/>
                    <h6>Male</h6>
                </div>
            </div>
        </div>
    );
}