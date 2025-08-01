import BlogList from "../components/BlogList"; 
import Footer from "../components/Footer";  
import React from "react";
import Header from "../components/Header";
function Blog(){
    return( 
        <div> 
            <BlogList /> 
            <Header/>
            <Footer /> 

        </div>      
    )   
} 
export default Blog;      