import React from 'react'
import './NewsItem.css'

function NewsItem(props){
    const { title, description, imageurl, newsurl, date, author, source } = props;
    const fallbackImg = "https://ichef.bbci.co.uk/news/1024/branded_news/4B53/production/_125538291_076841025.jpg";
    return (
        <article className="news-card">
            <span className="news-card__badge">{source}</span>
            <div className="news-card__media-wrap">
                <img src={imageurl || fallbackImg} className="news-card__img" alt="" />
            </div>
            <div className="news-card__body">
                <h2 className="news-card__title">{title}</h2>
                <p className="news-card__desc">{description}</p>
                <p className="news-card__meta">By <strong>{author || "Unknown"}</strong> · {new Date(date).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}</p>
                <a href={newsurl} target="_blank" rel="noopener noreferrer" className="news-card__cta">Read more</a>
            </div>
        </article>
    )
}


export default NewsItem
