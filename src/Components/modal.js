import React from "react";
const Modal = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary mt-5"
        data-mdb-toggle="modal"
        data-mdb-target="#staticBackdrop"
      >
        Adult Literacy
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-mdb-backdrop="static"
        data-mdb-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Adult Literacy
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                {" "}
                Adult Literacy is one of the course that is been offered at
                women development centre.
                <br />
                The duration of the course is six months.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">Understood</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
