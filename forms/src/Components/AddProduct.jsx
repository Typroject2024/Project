import React from "react";
import ContentHeader from "./ContentHeader";
function AddProduct() {
  return (
    <>
      <ContentHeader
        name="Add Product"
        sub_content="Information about product"
      />

      <div className="layout">
        <div className="res-form">
          <div className="form-box">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Last Weight
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Weight (Kg / ml / ltr)"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Category
              </label>
              <select
                className="form-control form-select"
                name=""
                id="exampleFormControlInput1"
              >
                <option className="form-control " value="None">
                  Category
                </option>
                <option className="form-control " value="Brew">
                  Brew
                </option>
                <option className="form-control " value="Powder">
                  Powder
                </option>
                <option className="form-control " value="Bottles">
                Bottles
                </option>
                <option className="form-control " value="Syrup">
                Syrup
                </option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Expire Limit (Days)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Days"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Description
              </label>
              <textarea name="" id="" className="form-control" style={{width:"80%"}} placeholder="Description..." cols="160" rows="2"></textarea>
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

export default AddProduct;
