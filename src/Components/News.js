import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
// import Newspaper from './SampleOutput'

const News = (props) => {

    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)

    const updateNews = async (page1) => {
        props.setProgress(10);  // loading bar setting progress 0
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=16723a221be243f3a7d83f1ab4a01fec
                   &page=${page1}&pageSize=${props.pageSize}`
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);  
        let parsedData = await data.json()
        props.setProgress(80);
        // console.log(parsedData)
        setArticles(parsedData.articles);
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
        <div className="container my-3">        
        <h2>- {props.heading2}</h2>       
            <div className="row">
            {articles.map((element) =>{
                return <div className="col mx-3 my-4" key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,100):""} 
                    imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                </div>
                })}
            </div>
            {loading && <Spinner/>}
            <div className="container d-flex justify-content-between">
                <button disabled={page<=1} type='button' className='btn btn-dark mx-3 my-5' 
                onClick={prevClick} style={{width:"120px"}}>&larr; Previous</button>
                <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type='button' 
                className='btn btn-dark mx-3 my-5' onClick={nextClick} style={{width:"120px"}}>Next &rarr;</button>
                {/* we can also use infinite scrollbar instead of next previous buttons  */}
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