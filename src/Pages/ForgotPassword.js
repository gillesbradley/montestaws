import React from "react";
import { Link } from "react-router-dom";



function ForgotPassword() {
    return (
      <div class="container-fluid">
        <div class="row" style={{"height": "100vh"}}>
            <div class="col-sm-6 d-flex justify-content-center align-items-center">
                <div style={{ width:"485px" }}>
                <div class="mb-5" style={{"position": "absolute", "top": "50px", "left": "35%"}}>
                        <p>
                            Remember your password ? <Link to="/login" class="text-decoration-none text-dark fw-bold">Login</Link>
                        </p>
                    </div>
    
                    <div>
                        <div class="my-4">
                            <h2>Forgot your password ?</h2>
                            <p>
                                Enter your email below and we will send you instructions to reset your password.
                            </p>
                        </div>
    
                        <div class="mt-5 mb-4">
                            <label class="form-label">Email</label>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email"/>
                            </div>
                        </div> 
    
                        <div class="my-4">
                            <button class="w-100 btn btn-dark btn-hover">Reset Password</button>
                        </div>
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
                    <img src="assets/img/trick-3.png" class="w-100 z-10" alt=""/>
                    <div class="z-100" style={{"position":"absolute", "height":"296px", "width": "100%", "background": "rgba(103, 58, 183, 0.5)", "filter": "blur(199px)"}}></div>
                </div>
            </div>
        
        </div>
    </div>
    );
  }

export default ForgotPassword;