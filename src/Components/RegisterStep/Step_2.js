import React from "react";

export const Step_2 = () => {
    return (
        <div>
            <div class="text-center">
                    <h1>Nice to meet you, Simon <img alt="" src="../../assets/img/Smiling.svg"/></h1>
                    <p>Let's select the category of your content</p>
                </div>
        
                <div class="my-5 categories">
                    <div class="category">
                        <img src="../../assets/img/categories/kids.png" alt=""/>
                        <h6>Kids</h6>
                    </div>

                    <div class="category">
                        <img src="../../assets/img/categories/teenager.png" alt=""/>
                        <h6>Teenager</h6>
                    </div>

                    <div class="category">
                        <img src="../../assets/img/categories/adult.png" alt=""/>
                        <h6>Adult</h6>
                    </div>
                </div>
        </div>
    );
}