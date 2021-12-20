import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Step_1 = ({currentStep, setCurrentStep, userInfo, setUserInfo}) => {

    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    
    const {register, handleSubmit, onChange, watch, formState:{ errors }} = useForm();

    const showMonths = () => {
        let months = [
            {value:"January"}, {value:"February"}, {value:"March"}, {value:"April"}, {value:"May"}, {value:"June"}, {value:"July"}, {value:"August"}, {value:"September"}, {value:"October"}, {value:"November"}, {value:"December"}
        ];

        return months.map(month => <option value={month.value} >{month.value}</option>);
    }

    const onSubmit = data => {
        userInfo.firstname = data.firstname; 
        userInfo.lastname = data.lastname; 
        userInfo.birth_day = data.day;
        userInfo.birth_month = data.month;
        userInfo.birth_year = data.year;
        
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="text-center">
                <h1>Welcome to Medical Game <img alt="" src="assets/img/Soso.svg"/></h1>
                <p>Before we begin, we would like to 
                    know  a little more about you</p>
            </div>
    
            <div>
                <div class="my-4">
                    <label class="form-label">Your name</label>
                    <div class="row">
                        <div class="col form-group">
                            <input value={lastname} onChange={(e) => {setLastname(e.target.value)}} type="text" {...register("lastname", {required:'Lastname is a required field'})} class="form-control" placeholder="Lastname"/>
                            {errors.lastname && <span className="text-danger mt-2 d-block">{errors.lastname.message}</span>}
                        </div>
                        <div class="col form-group">
                            <input value={firstname} onChange={(e) => {setFirstname(e.target.value)}} type="text" {...register("firstname", {required:'Firstname is a required field'})} class="form-control" placeholder="Firstname"/>
                            {errors.firstname && <span className="text-danger mt-2 d-block">{errors.firstname.message}</span>}
                        </div>
                    </div>
                </div>
                <div class="my-4">
                    <label class="form-label">Your birth date</label>
                    <div class="row">
                        <div class="col form-group">
                            <input type="number" value={userInfo.birth_day} placeholder="DD" min="1" max="31" {...register("day", {required:'The day of your birth day is required', valueAsNumber: true})} class="form-control"/>
                            {errors.day && <span className="text-danger mt-2 d-block">{errors.day.message}</span>}
                        </div>
                        <div class="col form-group">
                        <select value={userInfo.birth_month} {...register("month", {required:'This field is required'})} class="form-select">
                            <option>MM</option>
                            {
                                showMonths()
                            }
                        </select>
                        {errors.month && <span className="text-danger mt-2 d-block">{errors.month.message}</span>}
                        </div>
                        <div class="col form-group">
                            <input type="number"  value={userInfo.birth_year} placeholder="YYYY" min="1950" max={(new Date()).getFullYear()} {...register("year", {required:'The year of your birth day is required', valueAsNumber: true})} class="form-control"/>
                            {errors.year && <span className="text-danger mt-2 d-block">{errors.year.message}</span>}
                        </div>
                    </div>
                </div>
            </div>
    
            <div class='mt-5 d-flex justify-content-end'>
                <button type="submit" class="btn btn-light px-4">Next</button>
            </div>
        </form>
    );
}