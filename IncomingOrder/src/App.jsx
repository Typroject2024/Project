import "./App.css";
import ContentHeader from "./Compoenent/ContentHeader";

function App() {
  return (
    <>
      <ContentHeader name="Incoming Orders" />
      <div className="layout">
        <div className="res-form">
          <div className="form-box">
            <div className="mb-3">
              <select
                className="form-control form-select"
                name=""
                id="exampleFormControlInput1"
              >
                <option className="form-control " value="None">
                  Select Location
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
              <select
                className="form-control form-select"
                name=""
                id="exampleFormControlInput1"
              >
                <option className="form-control " value="None">
                  Select type
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

            <div
              class="input-group mb-3"
              style={{
                "margin-left": "18vw",
                width: "14.8vw",
                position: "relative",
              }}
            >
              <input
                type="text"
                class="form-control"
                tabindex="-1"
                placeholder="Search"
              />
              <i
                class="bi bi-search"
                style={{
                  "margin-left": "15vw",
                  padding: "2%",
                  background: "#04AA6D",
                  width: "2.7vw",
                  "font-size": "22px",
                  color: "white",
                  position: "absolute",
                  cursor: "pointer",
                }}
              />

              <i
                class="bi bi-arrow-clockwise"
                style={{
                  "margin-left": "19vw",
                  padding: "2%",
                  background: "#04AA6D",
                  width: "2.7vw",
                  "font-size": "22px",
                  color: "white",
                  position: "absolute",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="table">
            <table className="table table-bordered">
              <thead className="">
                <tr className="green-row">
                  <th scope="col">Sender ID </th>
                  <th scope="col">Receiver ID</th>
                  <th scope="col">Product ID</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Quantity</th>
                  <th scope="col">Product Order Date</th>
                  <th scope="col">Product Order Due Date</th>
                  <th scope="col">Order Approval</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SWMAH1</td>
                  <td>CWMGU1</td>
                  <td>101</td>
                  <td>PT Brew</td>
                  <td>10</td>
                  <td>04/04/2024</td>
                  <td>07/04/2024</td>
                  <td>
                    <button style={{ background: "white", border: "none" }}>
                      <i
                        class="bi bi-check-circle-fill"
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "green",
                        }}
                      ></i>
                    </button>
                    <button style={{ background: "white", border: "none" }}>
                      <i
                        class="bi bi-x-circle-fill"
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "red",
                        }}
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>SWMAH2</td>
                  <td>CWMGU1</td>
                  <td>102</td>
                  <td>CJ Brew</td>
                  <td>20</td>
                  <td>04/04/2024</td>
                  <td>08/04/2024</td>
                  <td>
                    <button style={{ background: "white", border: "none" }}>
                      <i
                        class="bi bi-check-circle-fill"
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "green",
                        }}
                      ></i>
                    </button>
                    <button style={{ background: "white", border: "none" }}>
                      <i
                        class="bi bi-x-circle-fill"
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "red",
                        }}
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>SWMAH3</td>
                  <td>CWMGU1</td>
                  <td>103</td>
                  <td>PT Brew</td>
                  <td>15</td>
                  <td>04/04/2024</td>
                  <td>07/04/2024</td>
                  <td>
                    <button style={{ background: "white", border: "none" }}>
                      <i
                        class="bi bi-check-circle-fill"
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "green",
                        }}
                      ></i>
                    </button>
                    <button style={{ background: "white", border: "none" }}>
                      <i
                        class="bi bi-x-circle-fill"
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "red",
                        }}
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>SWMAH4</td>
                  <td>CWMGU1</td>
                  <td>104</td>
                  <td>CJ Brew</td>
                  <td>30</td>
                  <td>04/04/2024</td>
                  <td>07/04/2024</td>
                  <td>
                    <button style={{ background: "white", border: "none" }}>
                      <i
                        class="bi bi-check-circle-fill"
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "green",
                        }}
                      ></i>
                    </button>
                    <button style={{ background: "white", border: "none" }}>
                      <i
                        class="bi bi-x-circle-fill"
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "red",
                        }}
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>SWMAH5</td>
                  <td>CWMGU1</td>
                  <td>105</td>
                  <td>PT Brews</td>
                  <td>20</td>
                  <td>17/04/2024</td>
                  <td>20/04/2024</td>
                  <td>
                    <button style={{ background: "white", border: "none" }}>
                      <i
                        class="bi bi-check-circle-fill"
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "green",
                        }}
                      ></i>
                    </button>
                    <button style={{ background: "white", border: "none" }}>
                      <i
                        class="bi bi-x-circle-fill"
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "red",
                        }}
                      ></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="download">
              <button
                className="form-button"
                style={{ "margin-top": ".1vh", "border-radius": "15px" }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
