// import { useState } from "react";
import "./App.css";
import ContentHeader from "./Component/ContentHeader";

function App() {
  // const [style, setStyle] = useState("none");
  // const HideShow = () => {
  //   console.log("you just clicked");
  //   if (style !== "none") setStyle("none")
  //   else setStyle("show");
  // };

  return (
    <>
      <ContentHeader name="Make Order" />
      <div className="main-containerbox">
        <div className="form-details">
          <div className="mb-3">
            <select
              className="form-control form-select rounded-5"
              name=""
              id="exampleFormControlInput1"
            >
              <option className="form-control " value="None">
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
            <select
              className="form-control form-select rounded-5 ms-1"
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
          <div className="mb-3" style={{ marginTop: "-8vh" }}>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold"
            >
              Product Name:-
            </label>
            <select
              className="form-control form-select rounded-5"
              name=""
              id="exampleFormControlInput1"
            >
              <option className="form-control " value="None">
                Select Product
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
          <div className="mb-3" style={{ marginTop: "-8vh" }}>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold"
            >
              Quantity:-
            </label>
            <input
              type="text"
              className="form-control rounded-5 ms-1"
              id=""
              placeholder="Enter Quantity"
            />
          </div>
          <div className="mb-3" style={{ marginTop: "-1vh" }}>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold"
            >
              Order Due Date:-
            </label>
            <input type="date" className="form-control rounded-5" id="" />
          </div>
          <div className="form-Button ms-4">
            <div className="mb-3">
              <input type="submit" value={"Add"} className="form-button" />
            </div>
            <div className="mb-3">
              <input type="reset" value={"Clear"} className="form-button" />
            </div>
          </div>
        </div>
        <div>
          <div className="table-content">
            <table className="table table-bordered">
              <thead className="fs-6">
                <tr className="green-row">
                  <th scope="col" className="HideShow">
                    Select
                  </th>
                  <th scope="col">Product ID</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="HideShow">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>101</td>
                  <td>PT Brew</td>
                  <td>10</td>
                  <td>04/04/2024</td>
                </tr>
                <tr>
                  <td className="HideShow">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>102</td>
                  <td>CJ Brew</td>
                  <td>20</td>
                  <td>04/04/2024</td>
                </tr>
                <tr>
                  <td className="HideShow">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>103</td>
                  <td>PT Brew</td>
                  <td>15</td>
                  <td>04/04/2024</td>
                </tr>
                <tr>
                  <td className="HideShow">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>104</td>
                  <td>CJ Brew</td>
                  <td>30</td>
                  <td>04/04/2024</td>
                </tr>
                <tr>
                  <td className="HideShow">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>105</td>
                  <td>PT Brews</td>
                  <td>20</td>
                  <td>17/04/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="form-Button">
            <div className="mb-3">
              <input type="submit" value={"Order"} className="form-button" />
            </div>
            <div className="mb-3">
              <input
                type="reset"
                id="HideShow"
                value={"Edit"}
                className="form-button"
                // onChange={HideShow}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
