import React, { useEffect, useState } from "react";

import {Link, useParams} from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Overlay from "../Components/Overlay";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import getToAxios from "../Services/getToAxios";

export default function StudyModuleDetail({history}){
    const {idStudyModule} = useParams();
    const [studyModule, setStudyModule] = useState({});
    const [stepsModule, setStepsModule] = useState([])
    const [stepCurrent, setStepCurrent] = useState(0)
    
    const  body = () => {
        let rows = [];
        for (let index = 0; index < stepsModule.length; index++) {
            rows.push(<p class={stepCurrent == index ? "mx-2 horizontal-bar active" : "mx-2 horizontal-bar"}></p>)
        }

        return rows
    }

    const showStepsStudyModule = () => {
        if (stepsModule.length == 0) {
            return <h2>loading ....</h2>;
        }else{
            return(
                <>
                    <div className="w-100">
                        {/* <video  className="w-100" style={{ borderRadius:"12px" }} controls="controls">
                            <source src={stepsModule[stepCurrent].stepMedia} type="video/mp4"/>
                        </video> */}

                        <iframe className="w-100" style={{ borderRadius:"12px" }} src={stepsModule[stepCurrent].stepMedia} height="500" src={stepsModule[stepCurrent].stepMedia} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
        
                    <div className="d-flex justify-content-between align-items-center">
                        <div class="row mt-5">
                            {
                                body()
                            }
                        </div>
                        <div>
                            <a className="btn btn-light me-1" onClick={() => setStepCurrent(stepCurrent - 1)} title="previous step"><i className="fa fa-angle-left"></i></a>
                            <a className="btn btn-light ms-1" onClick={() => setStepCurrent(stepCurrent + 1)} title="next step"><i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
        
                    <div class="mt-3">
                        <h3>
                            {
                                stepsModule[stepCurrent].stepTitle
                            }
                        </h3>
                        <p>
                            {
                                stepsModule[stepCurrent].stepContent
                            }
                        </p>
        
                        <div class="my-4">
                            <a href="#" class="btn btn-dark px-3">What did I retain ? <img src="assets/img/reflexion-icon.png" alt=""/></a>
                        </div>
                    </div>
                </>
            )
        }
    }

    const authListener = () => {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                //const uid = user.uid;
            } else {
                history.push("/");
            }
        })
    };

    useEffect(() => { 
        const getStudyModule = async () => {
            await getToAxios("http://localhost:59880/api/studymodule/"+idStudyModule).then(json => {
                setStudyModule(json);
                setStepsModule(json.stepsStudyModule);
            })
            .catch(error=>{
    
                console.log("erreur suivante : "+error);
            })
        }
        getStudyModule();

        authListener();
    }, [authListener])
    
    return (
        <>
            <Navbar/>
                
            <div class="container h-100 p-5" style={{marginBottom: "35px"}}>
                
                <div className="mt-5">
                    <Link to="studiesModules" className="btn btn-outline-dark"><i className="fa fa-arrow-left me-2"></i> Go Back</Link>
                </div>

                <div class="col-sm-12 my-5">
                    <div class="py-4 my-2">
                        <h2>{studyModule.moduleName}</h2>
                    </div>
                    
                    {
                        showStepsStudyModule()
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
}

