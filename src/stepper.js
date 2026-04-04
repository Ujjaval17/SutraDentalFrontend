import React, { useState } from "react";
import "./stepper.scss";

const Stepper = () => {
  const [step, setStep] = useState(1);
  const [step1data, setstep1Data] = useState({
    name: "",
    gender: "Male",
  });
  const [step2data, setstep2Data] = useState({
    address: "",
    contact: "",
  });
  const [step3data, setstep3Data] = useState({
    officeAddress: "",
    contact: "",
  });

  let genderArray = ["Male", "Female", "Other"];

  const onNextClick = () => {
    console.log(step1data,"data here")
    if (step === 1) {
      if(step1data?.name !== ""){

        localStorage.setItem("data1", JSON.stringify(step1data));
      }
      else {
        alert("enter name")
      }
    } else if (step === 2) {
      if(step2data.address === "" || step2data.contact === ""){
        alert("enter all details")
      }
      else if(step2data.contact.length !== 10){
        alert("enter contact valid number")
      }
      else{
        localStorage.setItem("data2", JSON.stringify(step2data));
      }
    } else if (step === 3) {
      
      if(step3data.officeAddress === "" || step2data.contact === ""){
        alert("enter all details")
      }
      else if(step3data.contact.length !== 10){
        alert("enter valid contact number")
      }
      else{
        localStorage.setItem("data2", JSON.stringify(step3data));
        let temp1 = localStorage.getItem("data1");
        let temp2 = localStorage.getItem("data2");
        let temp3 = localStorage.getItem("data3");
        setstep1Data(temp1);
        setstep2Data(temp2);
        setstep3Data(temp3);
        console.log("result",temp1,temp2,temp3,"result")
      }
    }
    setStep(step + 1);
  };

  const numRegex = /^[0-9]/;
  const alphaRegex = /^[A-Za-z]+$/;
  
  
  return (
    <>
   {
    step === 4 ?
    <div>
      All steps are completed, check console for viewing the data
    </div>
:
    <div>
      <div className="stepper d-flex gap-4 ">
        <div className="d-flex">
          {" "}
          <div className="step">
            <div className={step === 1 ? "active-step" : "step"}>1</div>
          </div>
          First step
        </div>
        <div className="d-flex">
          <div className="step">
            <div className={step === 2 ? "active-step" : "step"}>2</div>
          </div>
          Second Step
        </div>
        <div className="d-flex">
          <div className="step">
            <div className={step === 3 ? "active-step" : "step"}>3</div>
          </div>
          Third Step
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Skip
        </button>
        <button
          onClick={() => {
            onNextClick();
          }}
        >
          {step === 3 ? "Finish" : "Next"}
        </button>
      </div>
      <div className="form-container">
        {step === 1 && (
          <div>
            <h2>Personal Details</h2>
            <div className="d-flex">
              <label htmlFor="name">Name</label>
              <input
                value={step1data?.name}
                onChange={(e) => {
                  if(alphaRegex.test(e.target.value)){

                    setstep1Data({ ...step1data, name: e.target.value });
                  }
                  
                }}
                type="text"
                name="name"
              />
            </div>
            <div className="d-flex">
              <label htmlFor="name">Gender</label>
              <select
                value={step1data?.gender}
                onChange={(e) => {
                  setstep1Data({
                    ...step1data,
                    gender: genderArray[parseInt(e.target.value)],
                  });
                }}
                name=""
                id=""
              >
                <option value=""> Male</option>
                <option value=""> Female</option>
                <option value=""> Other</option>
              </select>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>contact details</h2>
            <div className="d-flex">
              <label htmlFor="address">Address</label>
              <input
                value={step2data?.address}
                onChange={(e) => {
                  if(alphaRegex.test(e.target.value) || e.target.value === ""){
                  setstep2Data({ ...step2data, address: e.target.value });
                  }
                }}
                type="text"
              />
            </div>
            <div className="d-flex">
              <label htmlFor="contact">Contact</label>
              <input
                value={step2data?.contact}
                onChange={(e) => {
                  if(numRegex.test(e.target.value) || e.target.value === ""){

                    setstep2Data({ ...step2data, contact: e.target.value });
                  }
                }}
                type="text"
              />
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Business Details</h2>
            <div className="d-flex">
              <label htmlFor="off-address">Office Address</label>
              <input
                value={step3data?.officeAddress}
                onChange={(e) => {
                  if(alphaRegex.test(e.target.value) || e.target.value === ""){
                  setstep3Data({ ...step3data, officeAddress: e.target.value });
                  }
                }}
                type="text"
              />
            </div>
            <div className="d-flex">
              <label htmlFor="address">Contact</label>
              <input
                value={step3data?.contact}
                onChange={(e) => {
                  if(numRegex.test(e.target.value) || e.target.value === ""){
                  setstep3Data({ ...step3data, contact: e.target.value });
                  }
                }}
                type="text"
              />
            </div>
          </div>
        )}
      </div>
    </div>
   }
    </>
  );
};

export default Stepper;
