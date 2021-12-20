import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Step_1 } from "../Components/RegisterStep/Step_1";
import { Step_2 } from "../Components/RegisterStep/Step_2";
import { Step_3 } from "../Components/RegisterStep/Step_3";

import { useForm } from "react-hook-form";
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firestoreConfig";


function RegisterStep({ history }) {
    const {register, handleSubmit, watch, formState:{ errors }} = useForm();

    const [currentStep, setCurrentStep] = useState(1);
    const [userInfo, setUserInfo] = useState({});

    const showStep = (val) =>{
        switch (val) {
            case 1:
                return <Step_1 currentStep={currentStep} setCurrentStep={setCurrentStep} userInfo={userInfo} setUserInfo={setUserInfo} />
            case 2:
                return <Step_2 userInfo={userInfo} setUserInfo={setUserInfo} />
            case 3:
                return <Step_3 userInfo={userInfo} setUserInfo={setUserInfo} />
            default:
                break;
        }
    }

    const showCurrentStep = () => {
        const row = [];
        for (let i = 1 ; i <= 3; i++) {
            row.push(<span class={(i == currentStep) ? "item active" : "item"}></span>);
        }

        return row;
    }

    const submitUserInformation = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        
        try {
            const userData = {
                avatar: null,
                browserStudyModules: null,
                contentCategory: userInfo.contentCategory,
                firstname: userInfo.firstname,
                lastname: userInfo.lastname,
                email: user.email,
                gender: userInfo.gender,
                birthdate: userInfo.birth_day+" "+userInfo.birth_month+" "+userInfo.birth_year,
            };
            console.log("avant docRef")
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData);

            history.push("/studiesModules");
            
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const checkIfUserSave = () => {
        const auth = getAuth();

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const user = auth.currentUser;

                const docRef = doc(db, "users", user.uid);
                const userRef = await getDoc(docRef);

                let userInfo = userRef.data();
                
                if (typeof userInfo === "undefined") {
                    
                }else{
                    history.push("/studiesModules");
                }
            } else {
                history.push("/");
            }
        })
    };

    useEffect(() => {
        checkIfUserSave();
    }, [checkIfUserSave])

    return (
        <>
        <div class="container d-flex align-items-center justify-content-center" style={{ height:"100vh" }}>
            <div  class="d-flex justify-content-center align-items-center row">
                <div class="text-center mb-4">
                    {
                        showCurrentStep()
                    }
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
                        ((currentStep < 3)) 
                        ? 
                            (
                                currentStep != 1
                                ? <a onClick={() => setCurrentStep(currentStep + 1)} class="btn btn-light px-4">Next</a>
                                : ""    
                            ) 
                        : ((currentStep > 2) ? <a onClick={submitUserInformation} class="btn btn-purple px-4">Finish</a> : "")
                    }
                </div>
            </div>
        </div>
        </>
    );
  }

export default RegisterStep;