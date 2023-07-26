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
      <NavLink className="P-read" to={`/story/${props.id}`}>
        Read full story
      </NavLink>
    </div>
  );
}

function ShowStory(story, index) {
  return (
    <Particular
      key={story.key}
      img={story.data.img}
      description={story.data.content}
      id={story.data.author}
    />
  );
}

export default class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      storiesData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "Stories");

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyname = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyname, data: data });
      });
      this.setState({ storiesData: records });
    });
  }

  render() {
    return <div>{this.state.storiesData.map(ShowStory)}</div>;
  }
}
