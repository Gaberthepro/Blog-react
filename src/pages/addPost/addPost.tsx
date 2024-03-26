import React, { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handlePost = () => {
    const postData = {
      title: title,
      body: body,
      author: "Gaber Čuješ"
    };
    axios
      .post("http://localhost:5000/posts/", postData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
      navigate(-1);
  };

  return (
    <Fragment>
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          id="floatingTextarea2"
          style={{ height: "50vh" }}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="floatingTextarea2">Tell your story...</label>
      </div>
      <button type="button" className="btn btn-primary" onClick={handlePost}>
        Publish
      </button>
    </Fragment>
  );
}

export default AddPost;
