import React from 'react'
import "./styles/Filter.css";
import { CiCirclePlus } from "react-icons/ci";

function Filter() {
  return (
    <div className='filters'>
        <div className="filter inactive">For You</div>
        <div className="filter active">News</div>
        <div className="filter inactive">Trending</div>
        <div className="filter-addition"><CiCirclePlus/></div>
    </div>
  )
}

export default Filter