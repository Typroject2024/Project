import React from "react";
import ContentHeader from "./ContentHeader";

function Notification() {
  return (
    <>
      <ContentHeader name={"Notifications"} />
      <div className="layout" >
        <div className="res-form" style={{"width":"45vw","border-radius":"10px","padding":"3%"}}>
          <div className="form-box" >
            <div className="mb-3">
              <label style={{"font-weight":"700"}} htmlFor="exampleFormControlInput1" className="form-label">
                Send To:-
              </label>
              <select
                className="form-control form-select"
                name=""
                id="exampleFormControlInput1"
                style={{ "border-radius": "20px","width":"15vw" }}
              >
                <option className="form-control " value="None" >
                  Select Location
                </option>
                <option className="form-control " value="PT Brew">
                  PT Brew
                </option>
                <option className="form-control " value="CJ Brew">
                  CJ Brew
                </option>
                <option className="form-control " value="PT Coffee powder">
                  PT Coffee powder
                </option>
                <option className="form-control " value="CJ Coffee powder">
                  CJ Coffee powder
                </option>
              </select>
            </div>

            <div className="mb-3">
              <label
                style={{ height: "3vh" }}
                htmlFor="exampleFormControlInput1"
                className="form-label"
              ></label>
              <select
                style={{ "border-radius": "20px","width":"15vw" }}
                className="form-control form-select"
                name=""
                id="exampleFormControlInput1"
              >
                <option className="form-control " value="None">
                  Select Type
                </option>
                <option className="form-control " value="PT Brew">
                  PT Brew
                </option>
                <option className="form-control " value="CJ Brew">
                  CJ Brew
                </option>
                <option className="form-control " value="PT Coffee powder">
                  PT Coffee powder
                </option>
                <option className="form-control " value="CJ Coffee powder">
                  CJ Coffee powder
                </option>
              </select>
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
              ></label>
              <select
                style={{ "border-radius": "20px","width":"35vw" }}
                className="form-control form-select"
                name=""
                id="exampleFormControlInput1"
              >
                <option className="form-control " value="None">
                  Select Manager
                </option>
                <option className="form-control " value="PT Brew">
                  PT Brew
                </option>
                <option className="form-control " value="CJ Brew">
                  CJ Brew
                </option>
                <option className="form-control " value="PT Coffee powder">
                  PT Coffee powder
                </option>
                <option className="form-control " value="CJ Coffee powder">
                  CJ Coffee powder
                </option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Description
              </label>
              <textarea name="" id="" className="form-control" style={{width:"90%"}} placeholder="Description..." cols="160" rows="2"></textarea>
            </div>

            <div className="mb-3">
              <input type="submit" value={"Send"} className="form-button" />
            </div>
            <div className="mb-3">
              <input type="reset" value={"Clear"} className="form-button" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
