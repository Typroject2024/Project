import React from "react";
import ContentHeader from "./ContentHeader";

function AddWarehouse() {
  return (
    <>
      <ContentHeader
        name="Add Warehouse / Outlet"
        sub_content="Information about Warehouse/outlet"
      />
      <div className="layout">
        <div className="res-form">
          <div className="form-box">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Warehouse Type
              </label>
              <select
                className="form-control form-select"
                name=""
                id="exampleFormControlInput1"
              >
                <option className="form-control " value="None">
                  Select Type
                </option>
                <option className="form-control " value="Center Warehouse">
                  Center Warehouse
                </option>
                <option className="form-control " value="Sub Warehouse">
                  Sub Warehouse
                </option>
                <option className="form-control " value="Outlet">
                  Outlet
                </option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Superior Warehouse
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter superior warehouse"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Warehouse Location
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Warehouse Location"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Warehouse / Outlet Manager ID 
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Manager ID"
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

export default AddWarehouse;
