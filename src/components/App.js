import React,{useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingState, setListingState] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => {
      setListingState(data)
    })
  },[])

  function deleteListing(item){
    const updatedList = listingState.filter((listing) => listing.id !== item.id )
    setListingState(updatedList)
  }

  //create a function that filters by search input on submitted 
  //need to lift props/state from search to apps then update listing 
  // on submit should pass the info to listcontainer and then filter by input and should mathc description   


  return (
    <div className="app">
      <Header input={input} setInput={setInput}/>
      <ListingsContainer listingState={listingState} deleteListing={deleteListing} input={input}/>
    </div>
  );
}

export default App;
