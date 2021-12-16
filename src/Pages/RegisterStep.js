import React from "react";
import { Link } from "react-router-dom";
import { Step_1 } from "../Components/RegisterStep/Step_1";
import { Step_2 } from "../Components/RegisterStep/Step_2";
import { Step_3 } from "../Components/RegisterStep/Step_3";



function RegisterStep() {
    return (
        <>
        <div class="container">
            <div class="d-flex justify-content-center align-items-center row">
                <div class="text-center mb-4">
                    <span class="item active"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                </div>
                <Step_1 />
                <Step_2 />
                <Step_3 />

                <div class="mt-5 d-flex justify-content-end">
                    <a href="step2.html" class="btn btn-dark px-4">Back</a>
                    <a href="step2.html" class="btn btn-light px-4">Next</a>
                </div>
            </div>
        </div>
        </>
    );
  }

export default RegisterStep;