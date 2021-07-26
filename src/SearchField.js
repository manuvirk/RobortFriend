import React from 'react';
const SearchField = ({searchChange}) =>{
return (
  <div className="pa2">
    <input type = "search" 
    placeholder="Search Robofriend"
    className="bg-light-blue pa3 ma2 bw2"
    onChange={searchChange}

    />


  </div>


);


}

export default SearchField;