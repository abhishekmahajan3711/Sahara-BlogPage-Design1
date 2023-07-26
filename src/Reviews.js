import React from "react";
import StartFirebase from "./firebaseConfigBlog";
import { ref, onValue } from "firebase/database";
import { NavLink } from "react-router-dom";

const db = StartFirebase();

function Particular(props) {
  return (
    <div className="P-main">
      <div className="P-img">
        <img src={props.img}></img>
      </div>
      <div className="P-title">Sahara</div>
      <div className="P-description">
        {props.description.substring(0, 270)}.........
      </div>
      <NavLink className="P-read" to={`/review/${props.id}`}>
        Read full review
      </NavLink>
    </div>
  );
}

function ShowReview(review, index) {
  return (
    <Particular
      key={review.key}
      img={review.data.img}
      description={review.data.content}
      id={review.data.author}
    />
  );
}

export default class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewsData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "Reviews");

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyname = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyname, data: data });
      });
      this.setState({ reviewsData: records });
    });
  }

  render() {
    return <div>{this.state.reviewsData.map(ShowReview)}</div>;
  }
}
