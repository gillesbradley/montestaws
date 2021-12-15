import React, { useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect, withRouter } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import app from "../base.js";



function Login({ history }) {

    const {register, handleSubmit, watch, formState:{ errors }} = useForm();

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onSubmit = data => {
        handleLogin(data);
    };

    const handleLogin = useCallback(async (data) => {
        try {
            await app.auth().signInWithEmailAndPassword(data.email, data.password);
            history.push("/studiesModules");
        }catch (error) {
            switch(error.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                  setEmailError(error.message);
                  break;
                
                case "auth/wrong-password":
                  setPasswordError(error.message);
                  break;
            }
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/studiesModules" />;
    }

    return (
      <div class="container-fluid">
        <div class="row" style={{"height": "100vh"}}>
            <div class="col-sm-6 d-flex justify-content-center align-items-center">
                <div>
                    <div class="mb-5" style={{ "position": "absolute", "top": "50px", "left": "35%" }}>
                        <p>
                        Not a member yet ? <Link to="/register" class="text-decoration-none text-dark fw-bold">SignUp</Link>
                        </p>
                    </div>
    
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="my-4">
                                <h2>Log in</h2>
                                <p>
                                    Log in with your data that you entered during your registration
                                </p>
                            </div>
                            <div class="mt-5 mb-4">
                                <label class="form-label">Email</label>
                                <div class="form-group" style={{ width:"485px" }}>
                                    <input type="email" {...register("email", {required:'This field is required'})} class="form-control" placeholder="Email"/>
                                    {errors.email && <span className="text-danger mt-2 d-block">{errors.email.message}</span>}
                                    {emailError && <span className="text-danger mt-2 d-block">{emailError}</span>}
                                </div>
                            </div>

                            <div class="my-4">
                                <label class="form-label">Password</label>
                                <div class="form-group" style={{ width:"485px" }}>
                                    <input type="password" {...register("password", {required:'This field is required', minLength:{value: 8, message:'Your password must be at least 8 characters long'}})} class="form-control" placeholder="Password"/>
                                    {errors.password && <span className="text-danger mt-2 d-block">{errors.password.message}</span>}
                                    {passwordError && <span className="text-danger mt-2 d-block">{passwordError}</span>}
                                </div>
                            </div>

                            <div class="mt-5 d-flex justify-content-between">
                                <label class="form-label">
                                    <input className="me-2" type="checkbox"/>
                                    Keep me logged in
                                </label>
                                <Link to="/forgot-password" class="text-purple-hover text-decoration-none">Forgot Password ?</Link>
                            </div>
        
                            <div class="my-4">
                                {/* <Link to="/studies-modules" class="w-100 btn btn-dark btn-hover">Log in</Link> */}
                                <button class="w-100 btn btn-dark btn-hover">Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 bg-purple justify-content-center align-items-center d-none d-sm-block">
                <div class=" d-flex justify-content-end">
                    <img src="assets/img/pattern.svg" alt="" style={{"position":"absolute", "top": 0, "right": 0}}/>
                    <img src="assets/img/pattern.svg" alt="" style={{"position":"absolute", "top": "90px", "right": "112px"}}/>
                    <img src="assets/img/pattern.svg" alt="" style={{"position":"absolute", "top": "178px", "right": 0}}/>
                </div>
                
                <div style={{"position": "absolute", "top": "35%", "left": "62%"}}>
                    <p class="text-uppercase mb-3" style={{"font-size": "13px"}}>tips & tricks</p>
                    <h3 class="mb-2">Some good practices</h3>
                    <div class="d-flex mt-3">
                        <span style={{"width":"3px;", "height": "70px", "background":"#fff", "border-radius":"2px", "display": "block"}}></span>
                        <p class="w-50 ms-3" style={{"font-weight": "300;", "font-size": "14px"}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Sed libero ut repellat doloremque ullam totam expedita dolores error eum saepe,
                            facere labore voluptates earum dolore dignissimos quam ad nobis voluptatem?
                        </p>
                    </div>
                </div>
                <div class="d-flex justify-content-end" style={{"position": "absolute", "bottom": 0, "right": 0, "width": "40%"}}>
                    <img src="assets/img/pattern.svg" alt="" style={{"position":"absolute", "top": "-30px", "right": "89%", "z-index": -10}}/>
                    <img src="assets/img/trick-2.png" class="w-100 z-10" alt=""/>
                    <div class="z-100" style={{"position":"absolute", "height":"296px", "width": "100%", "background": "rgba(103, 58, 183, 0.5)", "filter": "blur(199px)"}}></div>
                </div>
            </div>
        
        </div>
    </div>
    );
  }

export default withRouter(Login);