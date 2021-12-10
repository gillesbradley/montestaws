import React from "react";
import { Link } from "react-router-dom";



function Register() {
    return (
      <div class="container-fluid">
        <div class="row" style={{"height": "100vh"}}>
            <div class="col-sm-6 d-flex justify-content-center align-items-center">
                <div>
                    <div class="mb-5" style={{ "position": "absolute", "top": "50px", "left": "35%" }}>
                        <p>
                            Already have an account ? <Link to="/signin" class="text-decoration-none text-dark fw-bold">Login</Link>
                        </p>
                    </div>
    
                    <div>
                        <h2 class="my-4">Sign Up</h2>
    
                        <div class="mt-5 mb-4">
                            <label class="form-label">Email</label>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email"/>
                            </div>
                        </div>
    
                        <div class="my-4">
                            <label class="form-label">Password</label>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Password"/>
                            </div>
                        </div>
    
                        <div class="mt-5">
                            <label class="form-label">
                                <input className="me-2" type="checkbox"/>
                                I have read and accept the <a href="#" class="text-dark fw-bold">Terms of service</a> and <a href="#" class="text-dark fw-bold">Privacy policy</a>
                            </label>
                        </div>
    
                        <div class="my-4">
                            <Link to="/signup" class="w-100 btn btn-dark btn-hover">Create an account</Link>
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
                    <h3 class="mb-2">Use your phone</h3>
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
                    <img src="assets/img/pattern.svg" alt="" style={{"position":"absolute", "top": "-30px", "right": "89%"}}/>
                    <img src="assets/img/trick-1.png" class="w-100 z-10" alt=""/>
                    <div class="z-100" style={{"position":"absolute", "height":"296px", "width": "100%", "background": "rgba(103, 58, 183, 0.5)", "filter": "blur(199px)"}}></div>
                </div>
            </div>
        
        </div>
    </div>
    );
  }

export default Register;