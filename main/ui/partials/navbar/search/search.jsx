import React from 'react';

//Style
import '@allsource/ui.style.base'
import './search.css'

//Images
import SearchImage from './search.svg'

//Hooks
import {useState} from "react";

export const Search = ({initial}) => {

  const [value, setValue] = useState("");

  return (
    <div className="search__container">
      <div className="search__container__subcontainer">
        <img className="search__logo" src={SearchImage}/>
        <input className="search__input" placeholder={initial}/>
      </div>
    </div>
  )
};

export default Search;