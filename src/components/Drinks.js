import React, { useEffect, useState } from "react";
import DrinkList from "./DrinkList";
import Recipe from "./Recipe";


function Drinks() {
  const [baseurl, setBaseurl] = useState(
    "http://localhost:8000/drinks"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [searchDrink, setSearchDrink] = useState("");

 React.useEffect(() => {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItem(data);
        setShow(true);
      });
  }, [baseurl]);


  function handleIndex(letters) {
    setBaseurl(
      `http://localhost:8000/drinks${letters}`
    );
  }



  function handleSearchDrink(e) {
    if (e.key === "Enter") {
      setBaseurl(
        `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
      );
    }
  }

  //function to search for drinks in items starting with search input and returns all items 
  // if search input is empty
  function handleSearch(e){
    setSearchDrink(e.target.value);
    const search = e.target.value;
    if(search !== ""){
      var filteredData = item.filter((item) => {
        return item.strDrink.toLowerCase().startsWith(search.toLowerCase());
        }
      );
      setItem(filteredData);
    } else {
      setItem(item);
    }
  }


  return (
    <>
      <div className="meals">
        <div className="header">
          <h1>COCKTAILS INN</h1>
          
        </div>

        <div className="search">
          <input
            type="text"
            className="searchbox"
            onChange={(e) => handleSearch(e)}
            placeholder="Search by  drink name and press enter..."
          ></input>
        </div>
        <div className="indexHolder">
          <Recipe setIndex={(letters) => handleIndex(letters)} />
        </div>
        <div className="contain">
          {show ? <DrinkList data={item} /> : "Loading..."}
        </div>
      </div>
    </>
  );
}

export default Drinks;