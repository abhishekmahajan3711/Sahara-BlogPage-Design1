import React, { useState, useEffect } from "react";
import StartFirebase from "./firebaseConfigBlog";
import { ref, get, child } from "firebase/database";
import { useParams } from "react-router-dom";

function CallStory(props) {
  return (
    <div className="specific">
      <img className="specific-img" src={props.img} alt="" />
      <p className="specific-text">{props.content}</p>
    </div>
  );
}

export default function SpecialStory() {
  const { id } = useParams();

  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    const db = StartFirebase();
    const dbRef = ref(db);
    get(child(dbRef, "Stories/" + id)).then((obj) => {
      console.log(obj.val());
      if (obj.exists()) {
        setStoryData(obj.val());
      } else {
        alert("No data found");
      }
    });
  }, [id]);

  return (
    <>
      {storyData ? (
        <CallStory img={storyData.img} content={storyData.content} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
