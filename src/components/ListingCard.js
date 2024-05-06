import React,{useState} from "react";

function ListingCard({listing, deleteListing}) {
  const {id,description,image,location} = listing;
  const [isStarred, setStarred] = useState(true)

  function handleCLickFav(){
    setStarred(!isStarred)
  }
  function handleDelete(e){
    fetch(`http://localhost:6001/listings/${listing.id}`,{
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => deleteListing(listing))
  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"image"} />
      </div>
      <div className="details">
        {isStarred ? (
          <button className="emoji-button favorite active" onClick={handleCLickFav} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleCLickFav}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete()}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
