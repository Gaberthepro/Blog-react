import React, { Fragment, useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";

interface Post {
  title: string;
  body: string;
  author: string;
}

function Home() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
            <p className="card-text">
                {item.body.substring(0,250)+'...'}
            </p>
            <a href="/addPost" className="card-link">More</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
