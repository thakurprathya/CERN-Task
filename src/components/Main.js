import React, { useState } from 'react';
import '../styles/main.css';
import { useStaticQuery, graphql } from 'gatsby';

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
    const [status, setStatus]= useState("stable");
    
    return (
        <div className='main'>
            <div className="filters">
                <h2>Filter Content</h2>
                <div className='allFilters'>
                    <div className="statusFilter"><Dropdown data="status" types={["stable", "beta", "alpha"]} state={status} setState={setStatus}/></div>
                    <div className="videoFilter"><CheckBox data="videos" state={videos} setState={setVideos}/></div>
                    <div className="repoFilter"><CheckBox data="repository" state={repo} setState={setRepo}/></div>
                    <div className="webpageFilter"><CheckBox data="webPage" state={webpage} setState={setWebpage}/></div>
                </div>
            </div>
            <div className="content">
                <div className="searchBox">
                    <input type="text" placeholder="Search" value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value)}}/>
                </div>
            </div>
            {courses.map((course)=>{
                if(course.node?.name?.toLowerCase().includes(searchTxt.toLowerCase()) || course.node?.description?.toLowerCase().includes(searchTxt.toLowerCase()) || searchTxt.toLowerCase === ""){
                    return <Card data={course}/>
                }
            })}
        </div>
    )
};

export default Main;
