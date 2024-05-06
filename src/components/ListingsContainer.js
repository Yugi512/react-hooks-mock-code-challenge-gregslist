import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingState, deleteListing, input}) {

  const search = listingState.filter((listing) => {
    const lowerCase = listing.description.toLowerCase()
    if(input === "") return true;
    if(lowerCase.includes(input.toLowerCase())){
      return listing
    } 
  })
  return (
    <main>
      <ul className="cards">
        {search.map((listing) => 
          <ListingCard key={listing.id} listing={listing} deleteListing={deleteListing}/> 
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
