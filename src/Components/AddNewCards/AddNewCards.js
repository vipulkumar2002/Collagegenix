import React from "react";

const AddNewCards = () => {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New Card
              </h5>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">
                  Image Url
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="imageUrl"
                  placeholder="https://image.hello.jpg"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="personName" className="form-label">
                  Person Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="personName"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Google/Facebook/Microsoft"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="jobRole" className="form-label">
                  Job Role
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="jobRole"
                  placeholder="SDE/Developer/HR"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <button
        className="btn btn-primary addNewCard add-btn "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        +Add
      </button>
    </>
  );
};

export default AddNewCards;
