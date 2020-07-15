import React from 'react'
import Category from "../pages/Category"
import Course from "../pages/Course"
import Topic from "../pages/Topic"
import User from "../pages/User"
import Dashboard from "./Dashboard"

function Content({option}) {

    const renderOption = (() => {
        switch (option) {
            case "Categories": return <Category/>
            case "Courses": return <Course/>
            case "Topics": return <Topic/>
            case "Users": return <User/>
            default: return <Dashboard/>
        }
    })()

    return (
        <div>
            {renderOption}
        </div>
    )
}

export default Content
