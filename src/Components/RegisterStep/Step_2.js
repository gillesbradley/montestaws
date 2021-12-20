import React, { useEffect, useState } from "react";

export const Step_2 = ({userInfo, setUserInfo}) => {
    const [categorySelected, setCategorySelected] = useState(null)

    useEffect(() => {
        userInfo.contentCategory = categorySelected;
    }, [categorySelected])

    return (
        <div>
            <div class="text-center">
                    <h1>Nice to meet you, {userInfo.firstname} <img alt="" src="../../assets/img/Smiling.svg"/></h1>
                    <p>Let's select the category of your content</p>
                </div>
        
                <div class="my-5 categories">
                    <div onClick={() => setCategorySelected("Kids")} class={categorySelected == "Kids" ? "category active" : "category"}>
                        <img src="../../assets/img/categories/kids.png" alt="kids-category-content"/>
                        <h6>Kids</h6>
                    </div>

                    <div onClick={() => setCategorySelected("Teenager")} class={categorySelected == "Teenager" ? "category active" : "category"}>
                        <img src="../../assets/img/categories/teenager.png" alt="teenager-category-content"/>
                        <h6>Teenager</h6>
                    </div>

                    <div onClick={() => setCategorySelected("Adult")} class={categorySelected == "Adult" ? "category active" : "category"}>
                        <img src="../../assets/img/categories/adult.png" alt="adult-category-content"/>
                        <h6>Adult</h6>
                    </div>
                </div>
        </div>
    );
}