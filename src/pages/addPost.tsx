import React, { Fragment } from "react";

export function addPost() {
  return (
    <Fragment>
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Title"
        />
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
        ></textarea>
        <label htmlFor="floatingTextarea2">Tell your story...</label>
      </div>
      <button type="button" className="btn btn-primary">Publish</button>
    </Fragment>
  );
}

export default addPost;
