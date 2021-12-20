import React, { useEffect } from "react";

import {Link} from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Overlay from "../Components/Overlay";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function StudyModuleDetail({history}){
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
        video();
        authListener();
    }, [authListener, video])
    
    return (
        <>
            <Navbar/>
            
            <div class="container h-100 p-5" style={{marginBottom: "35px"}}>
                
                <div className="mt-5">
                    <Link to="studiesModules" className="btn btn-outline-dark"><i className="fa fa-arrow-left me-2"></i> Go Back</Link>
                </div>

                <div class="col-sm-12 my-5">
                    <div class="py-4 my-2">
                        <h2>How the body works</h2>
                    </div>
                    <div id="video-container">
                        <video id="video">
                            <source src="assets/bg-1.mp4"/>
                        </video>
                        {/* <img src="../assets/img/play-icon.png" alt=""> */}
                        <div class="controls">
                            <button id="play"><i class="fa fa-play-circle"></i></button>
                            <span id="videoTime"></span>/<span id="videoDuration"></span>
                            <input type="range" value="0" id="range"/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div class="row mt-5">
                            <p class="mx-2 horizontal-bar active"></p>
                            <p class="mx-2 horizontal-bar"></p>
                            <p class="mx-2 horizontal-bar"></p>
                            <p class="mx-2 horizontal-bar"></p>
                        </div>
                        <div>
                            <a className="btn btn-light me-1" data-toggle="tooltip" data-placement="top" title="Previous step"><i className="fa fa-angle-left"></i></a>
                            <a className="btn btn-light ms-1" data-toggle="tooltip" data-placement="top" title="Next step"><i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>

                    <div class="mt-3">
                        <h3>Step 1 : Parts of the human body</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Consectetur justo mollis lacus euismod praesent venenatis. 
                            Adipiscing aenean eget eget diam feugiat. Viverra mus non semper et porttitor purus nunc tempus. 
                            Iaculis sit eleifend cum accumsan lobortis. Imperdiet sed platea iaculis scelerisque. 
                            Tortor interdum magna congue amet, pretium sed. Quis ultrices at leo, egestas sapien sapien eu. 
                            Feugiat sit orci rutrum purus massa in facilisi platea ac. Egestas elit pellentesque velit nec erat. 
                            Felis aliquet diam porttitor proin arcu in scelerisque eget senectus. 
                            Aliquam lobortis quam velit nisl, ullamcorper. Lorem tincidunt quisque amet sodales.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Consectetur justo mollis lacus euismod praesent venenatis. 
                            Adipiscing aenean eget eget diam feugiat. Viverra mus non semper et porttitor purus nunc tempus. 
                            Iaculis sit eleifend cum accumsan lobortis. Imperdiet sed platea iaculis scelerisque. 
                            Tortor interdum magna congue amet, pretium sed. Quis ultrices at leo, egestas sapien sapien eu. 
                            Feugiat sit orci rutrum purus massa in facilisi platea ac. Egestas elit pellentesque velit nec erat. 
                            Felis aliquet diam porttitor proin arcu in scelerisque eget senectus. 
                            Aliquam lobortis quam velit nisl, ullamcorper. Lorem tincidunt quisque amet sodales.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Consectetur justo mollis lacus euismod praesent venenatis. 
                            Adipiscing aenean eget eget diam feugiat. Viverra mus non semper et porttitor purus nunc tempus. 
                            Iaculis sit eleifend cum accumsan lobortis. Imperdiet sed platea iaculis scelerisque. 
                            Tortor interdum magna congue amet, pretium sed. Quis ultrices at leo, egestas sapien sapien eu. 
                            Feugiat sit orci rutrum purus massa in facilisi platea ac. Egestas elit pellentesque velit nec erat. 
                            Felis aliquet diam porttitor proin arcu in scelerisque eget senectus. 
                            Aliquam lobortis quam velit nisl, ullamcorper. Lorem tincidunt quisque amet sodales.
                        </p>

                        <div class="my-4">
                            <a href="#" class="btn btn-dark px-3">What did I retain ? <img src="assets/img/reflexion-icon.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        
            <Footer/>

            {/* <Overlay/>   */}
        </>
    );
}

function video(){
    var play = document.getElementById('play')
    var range = document.getElementById('range')
    var videoTime = document.getElementById('videoTime')
    var videoDuration = document.getElementById('videoDuration')
    var video = document.getElementById('video')

    play.addEventListener('click', function (){
        if(video.paused){
            video.play();
            document.querySelector("#play i").classList.replace("fa-play-circle", "fa-pause")
        }else{
            video.pause();
            document.querySelector("#play i").classList.replace("fa-pause", "fa-play-circle")
        }
    })

    range.addEventListener('input', function() {
        video.currentTime = range.value;
        range.max = Math.floor(video.duration);
    })

    video.addEventListener('timeupdate', function() {
        videoTime.innerHTML = Math.floor(video.currentTime);
        range.value = video.currentTime;
        range.max = Math.floor(video.duration);
    })

    window.onload = function() {
        videoTime.innerHTML = video.currentTime;
        videoDuration.innerHTML = Math.floor(video.duration)+" s";
    }
}