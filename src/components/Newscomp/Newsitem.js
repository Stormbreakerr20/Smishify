import React from "react";

function Newsitem({ title, description, imageURL, newsURL, source }) {
  const MonkeyURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5HENvC7xtDKyjvP7cbGq7LtQ8tVi6a546bq6kGJLKyznUIOuZ3DJDqUrp7mm7kUH7T4I&usqp=CAU";
  return (
    <div>
      <div>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: 1, left: "85%" }}
        >
          {source}
        </span>
        <img
          src={imageURL ? imageURL : MonkeyURL}
          style={{ height: "250px" ,borderRadius:"10px",marginBottom:"10px"}}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{}}>
          <h5 style={{color:"black"}}>{description == null ? title : title.slice(0, 80) + "..."}</h5>
          <p>{description ? description.slice(0, 100) + "..." : ""}</p>
          <a
            href={newsURL}
            target="'_blank'"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsitem;
