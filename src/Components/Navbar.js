import React from "react";
import {Dropdown} from "react-bootstrap"

function Navbar() {
    return (
        <div class="container-fluid">
            <ul class="nav justify-content-around align-items-center mt-5">
                <li class="nav-item">
                    <img src="assets/img/logo.png" width="200px" alt=""/>
                </li>
                <Dropdown>
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                        <img src="assets/img/avatars/avatar.png" alt=""/>
                    </Dropdown.Toggle>
        
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><img src="assets/img/profile-icon.png" class="me-2" width="20px" alt=""/> Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><img src="assets/img/messages-icon.png" class="me-2" width="20px" alt=""/> Messages</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><img src="assets/img/settings-icon.png" class="me-2" width="20px" alt=""/> Settings</Dropdown.Item>
                        <Dropdown.Item href="#/action-4"><img src="assets/img/logout-icon.png" class="me-2" width="20px" alt=""/> Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ul>
        </div>
    );
  }

export default Navbar;