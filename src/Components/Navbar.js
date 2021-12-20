import React, { useState, useEffect } from "react";
import {Dropdown} from "react-bootstrap"

import { db } from "../firestoreConfig";
import { doc, getDoc, where } from 'firebase/firestore/lite';

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Redirect } from "react-router-dom";
import { get } from "react-hook-form";

function Navbar() {
    const [user, setUser] = useState({})
    /*const usersCollectionRef = collection(db, "users")*/
    const [uid, setUid] = useState("")
    const logout = () => {
        const auth = getAuth();
        
        signOut(auth).then(() => {
          return <Redirect to={"/"} />
        }).catch((error) => {
          console.log(error)
        });
    }

    useEffect(() => {
        
        const getUser = async (uidValue) => {
            const auth = getAuth();
            const user = auth.currentUser;

            const docRef = doc(db, "users", user.uid);
            const userInfo = await getDoc(docRef);

            setUser(userInfo.data())
        }
        getUser(uid);

    }, [])

    return (
        <div class="container-fluid">
            <ul class="nav justify-content-around align-items-center mt-5">
                <li class="nav-item">
                    <img src="assets/img/logo.png" width="200px" alt=""/>
                </li>
                <Dropdown>
                    <div className="d-flex justify-content-center align-items-center">
                        <Dropdown.Toggle className="d-flex " variant="white" id="dropdown-basic">
                            <img src="assets/img/avatars/avatar.png" alt=""/>
                        </Dropdown.Toggle>
                        <h6>{user.lastname+" "+user.firstname}</h6>
                    </div>
        
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><img src="assets/img/profile-icon.png" class="me-2" width="20px" alt=""/> Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><img src="assets/img/messages-icon.png" class="me-2" width="20px" alt=""/> Messages</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><img src="assets/img/settings-icon.png" class="me-2" width="20px" alt=""/> Settings</Dropdown.Item>
                        <Dropdown.Item onClick={logout}><img src="assets/img/logout-icon.png" class="me-2" width="20px" alt=""/> Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ul>
        </div>
    );
  }

export default Navbar;