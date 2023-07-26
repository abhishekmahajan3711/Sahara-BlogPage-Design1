import React from "react";
//import BlogComp from "./BlogComp";
import Blogs from "./Blogs";
//import StoryComp from "./StoryComp";
import Stories from "./Stories";
//import ReviewComp from "./ReviewComp";
import Reviews from "./Reviews";
//import ContentForm from "./ContentForm";
import MainForm from "./mainFunction";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
//import SpecificReview from "./SpecificReview";
import SpecialReview from "./SpecialReview";
//import SpecificStory from "./SpecificStory";
import SpecialStory from "./SpecialStory";
//import SpecificBlog from "./SpecificBlog";
import SpecialBlog from "./SpecialBlog";

//main component
function Navbar() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route exact path="/blog" element={<Blogs />} />
        <Route exact path="/blog/:id" element={<SpecialBlog />} />
        <Route exact path="/review" element={<Reviews />} />
        <Route exact path="/review/:id" element={<SpecialReview />} />
        <Route exact path="/story" element={<Stories />} />
        <Route exact path="/story/:id" element={<SpecialStory />} />
        <Route exact path="/shareYourStory" element={<MainForm />} />
        <Route exact path="/back" element={<Blogs />} />
      </Routes>
    </>
  );
}

//exporting
export default Navbar;
