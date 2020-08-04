import React from 'react'
import Home from "../components/Home"
import Category from "./Category"
import Course from "./Course"
import Topic from "./Topic"
import User from "./User"

function Content({path}) {

    if (path === 'dashboard') return <Home/>
    if (path === 'categories') return <Category/>
    if (path === 'courses') return <Course/>
    if (path === 'topics') return <Topic/>
    if (path === 'users') return <User/>
    return <Home/>
}

export default Content
