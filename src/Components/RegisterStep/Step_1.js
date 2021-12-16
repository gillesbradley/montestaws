import React from "react";

export const Step_1 = () => {
    return (
        <div>
            <div class="text-center">
                <h1>Welcome Medical Game <img alt="" src="assets/img/Soso.svg"/></h1>
                <p>Before we begin, we would like to 
                    know  a little more about you</p>
            </div>
    
            <div>
                <div class="my-4">
                    <label class="form-label">Your name</label>
                    <div class="row">
                        <div class="col form-group">
                            <input type="text" class="form-control" placeholder="Lastname"/>
                        </div>
                        <div class="col form-group">
                            <input type="text" class="form-control" placeholder="Firstname"/>
                        </div>
                    </div>
                </div>
                <div class="my-4">
                    <label class="form-label">Your birth date</label>
                    <div class="row">
                        <div class="col form-group">
                            <select name="" class="form-select">
                                {/* <script>
                                    for (let index = 1; index < 31; index++) {
                                        index = (index<10) ? "0"+index : index;
                                        document.write("<option value=''>"+index+"</option>");
                                    }
                                </script> */}
                            </select>
                        </div>
                        <div class="col form-group">
                            <select name="" class="form-select">
                                {/* <script>
                                    months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
                                    months.forEach(m => {
                                        document.write("<option value=''>"+m+"</option>");
                                    });
                                </script> */}
                            </select>
                        </div>
                        <div class="col form-group">
                            <select name="" class="form-select">
                                {/* <script>
                                    for (let index = (new Date()).getFullYear() ; index >= 1950; index--) {
                                        document.write("<option value=''>"+index+"</option>");
                                    }
                                </script> */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    );
}