//Style
import './Search.css'

//Images
import SearchImage from '../../../../images/search.svg'
import {useState} from "react";

const Search = ({initial}) => {

  const [value, setValue] = useState();

  return (
    <div className="search__container">
      <div className="search__container__subcontainer">
        <img className="search__logo" src={SearchImage}/>
        <input className="search__input" placeholder={initial} value={value} onInput={e => setValue(e.target.value)}/>
      </div>
    </div>
  )
};

export default Search;