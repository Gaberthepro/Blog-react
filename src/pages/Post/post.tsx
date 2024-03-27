import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Home from "../Home/home";
import axios from "axios";
import "./post.css";

interface post {
  _id: string;
  title: string;
  body: string;
  author: string;
}

function Post() {
  const { id } = useParams();
  const [data, setData] = useState<post>();

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts/" + id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  return (
    <Fragment>
      <div>
        <div className="Center">
          <h1>{data?.title}</h1>
          <blockquote className="blockquote">
            <p>{data?.author}</p>
          </blockquote>
          <p>{data?.body}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Post;
