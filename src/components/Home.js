import React, {useState} from 'react'
import styled from "styled-components"
import Content from "./Content"

const optionList = [
    {name: 'Dashboard'},
    {name: 'Categories'},
    {name: 'Courses'},
    {name: 'Topics'},
    {name: 'Users'},
]

function Home() {

    const [selectedOption, setSelectedOption] = useState('')

    const optionClick = option => {
        setSelectedOption(option.name)
    }

    return (
        <Styles>
            <div className='row'>
                <div className="col-sm-2 custom-btn">
                    {optionList.map((option, index) => (
                        <p className='option-item' key={index} onClick={() => optionClick(option)}>{option.name}</p>
                    ))}
                </div>
                <div className="col-sm-10">
                    <Content option={selectedOption}/>
                </div>
            </div>
        </Styles>
    )
}

export default Home

const Styles = styled.div`
    .custom-btn {
        cursor: pointer;
        text-align: center;
    }
    .option-item {
        border: 1px solid;
        padding: .5rem
    }
`
