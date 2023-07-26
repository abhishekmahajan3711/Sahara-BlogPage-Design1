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
      <NavLink className="P-read" to={`/blog/${props.id}`}>
        Read full blog
      </NavLink>
    </div>
  );
}

function ShowBlog(blog, index) {
  return (
    <Particular
      key={blog.key}
      img={blog.data.img}
      description={blog.data.content}
      id={blog.data.author}
    />
  );
}

export default class Blogs extends React.Component {
  constructor() {
    super();
    this.state = {
      blogsData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "Blogs");

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyname = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyname, data: data });
      });
      this.setState({ blogsData: records });
    });
  }

  render() {
    return <div>{this.state.blogsData.map(ShowBlog)}</div>;
  }
}
