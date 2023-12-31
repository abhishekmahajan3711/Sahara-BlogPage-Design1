import React, { useState, useEffect } from "react";
import StartFirebase from "./firebaseConfigBlog";
import { ref, get, child } from "firebase/database";
import { useParams } from "react-router-dom";

function CallBlog(props) {
  return (
    <div className="specific">
      <img className="specific-img" src={props.img} alt="" />
      <p className="specific-text">{props.content}</p>
    </div>
  );
}

export default function SpecialBlog() {
  const { id } = useParams();

  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const db = StartFirebase();
    const dbRef = ref(db);
    get(child(dbRef, "Blogs/" + id)).then((obj) => {
      console.log(obj.val());
      if (obj.exists()) {
        setBlogData(obj.val());
      } else {
        alert("No data found");
      }
    });
  }, [id]);

  return (
    <>
      {blogData ? (
        <CallBlog img={blogData.img} content={blogData.content} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
