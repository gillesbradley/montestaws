import React from "react";
import { Link } from "react-router-dom";


function Welcome() {
    return (
      <>
        <div class="logo">
            <img src="assets/img/logo-white.png" alt=""/>
        </div>
        <div class="banner">
            <video autoplay="true" muted loop src="assets/bg-1.mp4" type="video/mp4"/>

            <div class="content">
                
                <div>
                    <h1 class="text-purple">Welcome to Medical Game</h1>
                    <p>
                        To get started, create a profile, which will help us customize your experience.
                    </p>
                    <p>
                        These responses will be featured on your profile, for
                        other study abroad students to see. You can always go 
                        back to your profile to edit your responses in the future
                    </p>
                    <div class="mt-5">
                        <Link to="/register" class="btn btn-purple text-uppercase me-3 px-4" style={{"border-radius": "12px;"}}>Get started</Link>
                        <Link to="/login" class="btn btn-outline-light text-uppercase px-4">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>

        <div class="overlay"></div>
      </>
    );
  }

export default Welcome;