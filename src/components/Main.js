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

    const [searchTxt, setSearchTxt]= useState("");

    return (
        <div className='main'>
            <div className="filters">
                <h2>Filter Content</h2>
                <div className="statusFilter"><Dropdown data="status" types={["stable", "beta", "alpha"]}/></div>
                <div className="videoFilter"><CheckBox data="videos" /></div>
                <div className="repoFilter"><CheckBox data="repository" /></div>
                <div className="webpageFilter"><CheckBox data="webPage" /></div>
            </div>
            <div className="content">
                <div className="searchBox">
                    <input type="text" placeholder="Search" value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value)}}/>
                </div>
            </div>
            {courses.map((course)=>{
                console.log(course)
                if(course.node?.name?.toLowerCase().includes(searchTxt.toLowerCase()) || course.node?.description?.toLowerCase().includes(searchTxt.toLowerCase()) || searchTxt.toLowerCase === ""){
                    <Card data={course}/>
                }
            })}
        </div>
    )
};

export default Main;
