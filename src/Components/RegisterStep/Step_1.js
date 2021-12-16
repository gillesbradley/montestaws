import React, { useState } from "react";

export const Step_1 = () => {

    const showDaysNumber = (numbers) => {
        const row = [];
        for (let i = 1 ; i <= 31; i++) {
                row.push(<option value=''>{(i<10) ? "0"+i : i}</option>);
        }

        return row;
    }

    const showMonths = () => {
        let months = [
            {value:"January"}, {value:"February"}, {value:"March"}, {value:"April"}, {value:"May"}, {value:"June"}, {value:"July"}, {value:"August"}, {value:"September"}, {value:"October"}, {value:"November"}, {value:"December"}
        ];

        return months.map(month => <option value={month.value} >{month.value}</option>);
    }

    const showYears = () => {
        const row = [];
        for (let i = (new Date()).getFullYear() ; i >= 1950; i--) {
                row.push(<option value=''>{i}</option>);
        }

        return row;
    }

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
                                {
                                    showDaysNumber(31)
                                }
                            </select>
                        </div>
                        <div class="col form-group">
                        <select name="" class="form-select">
                            {
                                showMonths()
                            }
                        </select>
                        </div>
                        <div class="col form-group">
                            <select name="" class="form-select">
                                {
                                    showYears()
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    );
}