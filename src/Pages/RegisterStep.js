import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Step_1 } from "../Components/RegisterStep/Step_1";
import { Step_2 } from "../Components/RegisterStep/Step_2";
import { Step_3 } from "../Components/RegisterStep/Step_3";



function RegisterStep() {

    const [currentStep, setCurrentStep] = useState(1);
    const showStep = (val) =>{
        switch (val) {
            case 1:
                return <Step_1 />
            case 2:
                return <Step_2 />
            case 3:
                return <Step_3 />
            default:
                break;
        }
    }


    return (
        <>
        <div class="container d-flex align-items-center justify-content-center" style={{ height:"100vh" }}>
            <div class="d-flex justify-content-center align-items-center row">
                <div class="text-center mb-4">
                    <span class="item active"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                    {}
                </div>

                {
                    showStep(currentStep)
                }

                <div class={(currentStep > 1) ? "mt-5 d-flex justify-content-between" : 'mt-5 d-flex justify-content-end'}>
                    { 
                        (currentStep > 1) 
                        ? <a onClick={() => setCurrentStep(currentStep - 1)} class="btn btn-dark px-4">Back</a> 
                        : "" 
                    }

                    { 
                        (currentStep < 3) 
                        ? <a onClick={() => setCurrentStep(currentStep + 1)} class="btn btn-light px-4">Next</a> 
                        : <a href="#" class="btn btn-purple px-4">Finish</a> 
                    }
                </div>
            </div>
        </div>
        </>
    );
  }

export default RegisterStep;