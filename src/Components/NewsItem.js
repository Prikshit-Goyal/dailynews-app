import React from 'react'

function NewsItem(props){
        let {title,description,imageurl,newsurl,date,author,source} = props;
        return (
        <div>
            <div className="card" style={{width: "18rem",height: "30rem"}}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{left:"20%",zIndex:"1"}}>{source}</span>
            <img src={!imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/4B53/production/_125538291_076841025.jpg":imageurl} style={{width: "286px",height: "176px"}} className="card-img-top" alt="..."/>
            <div className="card-body" >
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By - {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} target="blank" className="btn btn-primary">Read More</a>
            </div>
            </div>
        </div>
        )
    }
    

export default NewsItem