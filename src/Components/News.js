import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import './News.css'
// import Newspaper from './SampleOutput'

const News = (props) => {

    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)

    const updateNews = async (page1) => {
        props.setProgress(10);  // loading bar setting progress 0
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=16723a221be243f3a7d83f1ab4a01fec
        //            &page=${page1}&pageSize=${props.pageSize}`
        const apiKey = "pub_97aa8e35b28d4d14aef7f7bbdd902503" //"pub_17b59e26d76e45fbad9a6908dd7cf181"
        const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=${props.country}&language=en&category=${props.category}&image=1&size=${props.pageSize}`
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);  
        let parsedData = await data.json()
        props.setProgress(80);
        // console.log("DATA ::: ",parsedData)
        setArticles(parsedData.results);
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);  // loading bar setting progress 100
        // console.log(page)
    }
    useEffect(() =>{
        updateNews(1)
         // eslint-disable-next-line 
    },[])
    
    // we can also use infinite scrollbar instead of next previous buttons
    const prevClick = async () => {
        // console.log("Previous")
        updateNews(page-1); 
        setPage(page-1)      
    }
    const nextClick = async () => {
        // console.log("next")
        updateNews(page+1);
        setPage(page+1)
    }

    return (
        <>
        <div className="news-page">
            {loading && <Spinner/>}
            <h2 className="news-page__heading">{props.heading2}</h2>
            <div className="row g-4">
            {articles.map((element) =>{
                return <div className="col-12 col-md-6 col-xl-4" key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,100):""}
                    imageurl={element.image_url} newsurl={element.link} date={element.pubDate} author={element.creator} source={element.source_name ?? "News"}/>
                </div>
                })}
            </div>
            <div className="news-pagination">
                <button disabled={page<=1} type="button" className="news-btn"
                onClick={prevClick}>&larr; Previous</button>
                <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button"
                className="news-btn" onClick={nextClick}>Next &rarr;</button>
            </div>
        </div>
      </>
    )
}

News.defaultProps = {
    country:"in",
    pageSize: 9,
    category : "general"
}
News.propTypes= {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News 