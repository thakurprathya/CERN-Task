import React, { useState } from 'react';
import '../styles/main.css';
import { useStaticQuery, graphql } from 'gatsby';

//components
import Card from './Card';
import Dropdown from './Dropdown';
import CheckBox from './CheckBox';

const Main = () => {
    const data = useStaticQuery(graphql`
    query {
        allCoursesYaml {
            edges {
                node {
                    description
                    name
                    repository
                    status
                    videos
                    webpage
                    id
                    heroImage
                    tag
                }
            }
        }
    }
  `);
    const courses= data.allCoursesYaml.edges;   //retrieving array of objects from pulled data from gatsby data layer

    // states
    const [searchTxt, setSearchTxt]= useState("");
    const [videos, setVideos]= useState({checkbox1:true, checkbox2:true});
    const [repo, setRepo]= useState({checkbox1:true, checkbox2:true});
    const [webpage, setWebpage]= useState({checkbox1:true, checkbox2:true});
    const [status, setStatus]= useState("all");
    const [curriculum, setCurriculum]= useState("all");
    
    return (
        <div className='main'>
            <div className="filters">
                <h2>Filter Content</h2>
                <div className='allFilters'>
                    <div><Dropdown data="curriculum" types={["all", "Software_Basics", "Software_Development", "Frontend", "Backend"]} state={curriculum} setState={setCurriculum}/></div>
                    <div><Dropdown data="status" types={["all", "stable", "beta", "alpha"]} state={status} setState={setStatus}/></div>
                    <div><CheckBox data="videos" state={videos} setState={setVideos}/></div>
                    <div><CheckBox data="repository" state={repo} setState={setRepo}/></div>
                    <div><CheckBox data="webPage" state={webpage} setState={setWebpage}/></div>
                </div>
            </div>
            <div className="content">
                <div className="searchBox">
                    <input type="text" placeholder="Search" value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value)}}/>
                </div>
                {courses.map((course) => {
                    if((searchTxt.toLowerCase === "") || (course.node?.name?.toLowerCase().includes(searchTxt.toLowerCase())) || (course.node?.description?.toLowerCase().includes(searchTxt.toLowerCase())) || (course.node?.status?.toLowerCase().includes(searchTxt.toLowerCase()))){
                        if((status === "all") || (course.node?.status === status)){
                            if((curriculum === "all") || (course.node?.tag?.includes(curriculum))){
                                if((videos.checkbox1 === true && videos.checkbox2 === true) || (videos.checkbox1 === true ? course.node?.videos !== "" : course.node?.videos === "") && (videos.checkbox2 === true ? course.node?.videos === "" : course.node?.videos !== "") ||
                                (repo.checkbox11 === true && repo.checkbox2 === true) || (repo.checkbox1 === true ? course.node?.repository !== "" : course.node?.repository === "") && (repo.checkbox2 === true ? course.node?.repository === "" : course.node?.repository !== "") ||
                                (webpage.checkbox1 === true && webpage.checkbox2 === true) || (webpage.checkbox1 === true  ? course.node?.webpage !== "" : course.node?.webpage === "") && (webpage.checkbox2 === true  ? course.node?.webpage === "" : course.node?.webpage !== ""))
                                    return <Card data={course} key={course.node?.id} /> 
                            }
                        }
                    }
                })}
            </div>
        </div>
    )
};

export default Main;
