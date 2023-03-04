import React, { Component } from "react";

export class Newsitem extends Component {

  render() {

    let {title,description,imageURL,newsURL,source}=this.props
    return (
      <div>
        <div className={`card bg-${this.props.mode==='dark' ?'black':'white' }`}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:'85%'}} >
              {source}
              </span>
          <img src={imageURL?imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5HENvC7xtDKyjvP7cbGq7LtQ8tVi6a546bq6kGJLKyznUIOuZ3DJDqUrp7mm7kUH7T4I&usqp=CAU'} style={{height:'250px'}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className={`card-title text-${this.props.mode==='dark' ?'white':'black'} `}> {description==null?title:title.slice(0,80)+"..."}</h5>
            <p className={`card-text text-${this.props.mode==='dark' ?'white':'black'}`}>
              {description?description.slice(0,100)+"...":""}
            </p>
            <a href={newsURL} target="'_blank'" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
