import React from "react";
import ContentHeader from "./ContentHeader";
function AddStock() {
  return (
    <>
      <ContentHeader name="Add Stock" sub_content="Information about stock" />

      <div className="layout">
        <div className="res-form">
          <div className="form-box">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Name
              </label>
              <select
                className="form-control form-select"
                name=""
                id="exampleFormControlInput1"
              >
                <option className="form-control " value="None">
                  Select product
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
                Product ID
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter product ID"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter quantity"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Manufacture Date
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Supplier Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter supllier name"
              />
            </div>

            <div className="mb-3">
              <input type="submit" value={"Add"} className="form-button" />
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

export default AddStock;
