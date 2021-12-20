import React from "react"

import {Link} from "react-router-dom"

export const StudyModule = ({data}) => {
    return (
        <Link class="col-sm-4 card m-3 text-dark" style={{textDecoration: "none"}} to="/studies-modules-detail">
            <div class="card-body">
                <img src={data.icon} alt="" srcset=""/>
                <h5 class="mt-2 card-title">{data.title}</h5>
                <p class="card-text">{data.description}</p>
            </div>
        </Link>
    )
}
