import React from "react";
import StartFirebase from "./firebaseConfigBlog";
import { ref, set } from "firebase/database";

export class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: "",
      author: "",
      content: "",
      img: "",
    };
    this.interface = this.interface.bind(this);
  }

  componentDidMount() {
    this.setState({ db: StartFirebase() });
  }

  render() {
    return (
      <div>
        <form className="ShareStory">
          <p className="form-text">Enter author name :</p>
          <textarea
            cols="100"
            name="Name"
            value={this.state.author}
            onChange={(e) => {
              this.setState({ author: e.target.value });
            }}
          />

          <p className="form-text">Paste the link of image here :</p>
          <textarea
            cols="100"
            name="Name"
            value={this.state.img}
            onChange={(e) => {
              this.setState({ img: e.target.value });
            }}
          />

          <p className="form-text">Write your blog/review/story here :</p>
          <textarea
            rows="10"
            cols="100"
            name="Name"
            value={this.state.content}
            onChange={(e) => {
              this.setState({ content: e.target.value });
            }}
          />
          <button
            className="shareStory-button btn"
            id="addblog"
            onClick={this.interface}
          >
            PUBLISH BLOG
          </button>
          <button
            className="shareStory-button btn"
            id="addstory"
            onClick={this.interface}
          >
            PUBLISH STORY
          </button>
          <button
            className="shareStory-button btn"
            id="addreview"
            onClick={this.interface}
          >
            PUBLISH REVIEW
          </button>
        </form>
      </div>
    );
  }

  interface(event) {
    const id = event.target.id;
    if (id === "addblog") {
      this.insertBlog();
    } else if (id === "addstory") {
      this.insertStory();
    } else if (id === "addreview") {
      this.insertReview();
    }
  }

  getAlldata() {
    return {
      author: this.state.author,
      content: this.state.content,
      img: this.state.img,
    };
  }

  insertBlog() {
    const db = this.state.db;
    const data = this.getAlldata();

    set(ref(db, "Blogs/" + data.author), {
      author: data.author,
      content: data.content,
      img: data.img,
    }).then(() => {
      alert("Blog Published Successfully");
    });
  }

  insertStory() {
    const db = this.state.db;
    const data = this.getAlldata();

    set(ref(db, "Stories/" + data.author), {
      author: data.author,
      content: data.content,
      img: data.img,
    }).then(() => {
      alert("Story Published Successfully");
    });
  }

  insertReview() {
    const db = this.state.db;
    const data = this.getAlldata();

    set(ref(db, "Reviews/" + data.author), {
      author: data.author,
      content: data.content,
      img: data.img,
    }).then(() => {
      alert("Review Published Successfully");
    });
  }
}

export default MainForm;
