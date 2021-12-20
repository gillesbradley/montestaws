import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, {useEffect, useState} from "react";
import { Link, Redirect } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Overlay from "../Components/Overlay";
import { StudyModule } from "../Components/StudyModule";
import { db } from "../firestoreConfig";
import { studiesModules } from "../Mocks/data";


export default function Home({history}) {

    const checkIfUserNotSave = () => {
        const auth = getAuth();

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const user = auth.currentUser;

                const docRef = doc(db, "users", user.uid);
                const userRef = await getDoc(docRef);

                let userInfo = userRef.data();
                
                if (typeof userInfo == "undefined") {
                    history.push("/registerStep");
                }else{
                }
            } else {
                history.push("/");
            }
        })
    };

    const [studyModules, setStudyModules] = useState([]);

    useEffect(() => {
        setStudyModules(studiesModules);
        checkIfUserNotSave();
    }, [checkIfUserNotSave]);

    

    return (
        <>
            <Navbar/>
            <div class="container h-100 p-5">
                <div class="d-flex justify-content-center align-items-center flex-column h-75">
                    <div class="p-4 my-5 text-center">
                        <h1>Select a category </h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Laborum tempore aut accusantium nemo? Iusto ut dolores modi, eius nobis quaerat non dignissimos, 
                            provident, architecto asperiores iure accusantium officia amet dicta!</p>
                    </div>
                    <div class="row d-flex justify-content-center align-items-center">
                        {
                            studyModules.map((s, index) => {
                                return (
                                    <StudyModule key={index} data={s} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Footer />

            {/* <Overlay />   */}
        </>
    );
  }