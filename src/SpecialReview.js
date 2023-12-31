import React, { useState, useEffect } from "react";
import StartFirebase from "./firebaseConfigBlog";
import { ref, get, child } from "firebase/database";
import { useParams } from "react-router-dom";

function CallReview(props) {
  return (
    <div className="specific">
      <img className="specific-img" src={props.img} alt="" />
      <p className="specific-text">{props.content}</p>
    </div>
  );
}

export default function SpecialReview() {
  const { id } = useParams();

  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    const db = StartFirebase();
    const dbRef = ref(db);
    get(child(dbRef, "Reviews/" + id)).then((obj) => {
      console.log(obj.val());
      if (obj.exists()) {
        setReviewData(obj.val());
      } else {
        alert("No data found");
      }
    });
  }, [id]);

  return (
    <>
      {reviewData ? (
        <CallReview img={reviewData.img} content={reviewData.content} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
