import React from "react"

import {Link} from "react-router-dom"

export const StudyModule = ({data}) => {
    return (
        <Link class="col-sm-4 card m-3 text-dark" style={{textDecoration: "none", width: "350px"}} to={"/"+data.moduleID}>
            <div class="card-body">
                <img src={data.moduleIcon} alt="" srcset=""/>
                <h5 class="mt-2 card-title">{data.moduleName}</h5>
                <p class="card-text">{data.moduleDescription}</p>
            </div>
        </Link>
    )
}
