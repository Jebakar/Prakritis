import React from "react";
import BlogCard from "./BlogCard"; 
import onam from "../Images/onam.webp"
import newyear from "../Images/newyear.png"
import christmas from "../Images/christmas.png"

const blogs = [ 
  {
    title: "Happy Onam",
    date: "21 Aug",
    image: onam,
    link: "https://prakritiayurveda.com/happy-onam/",  
  },
  {
    title: "Happy New Year 2023",
    date: "29 Dec",
    image: newyear,
    link: "https://prakritiayurveda.com/happy-new-year-2023/",
  },
  {
    title: "Merry Christmas 2022", 
    date: "24 Nov",
    image: christmas,
    link: "https://prakritiayurveda.com/merry-christmas-2022/",
  },
];

const BlogList = () => {
  return (
    <section className="py-5 " style={{background:"#f5f7f8ff"}}>
      <div className="container">
        <h2 className="text-center mb-5 text-bold mt-5" style={{fontSize:"48px" ,fontFamily:"'Brygada 1918', serif"}}>Blogs</h2>
        <div className="row">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} /> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
