import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    useEffect(() => {
      updateNews();
      document.title = `${capitalizeLetter(props.category)} - NewsExpress`;
      // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        setPage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    return (
      <>
        <h2 className='text-center' style={{margin: '90px 0px 20px'}}>NewsMonkey - Top {capitalizeLetter(props.category)} Headlines.</h2>
        {loading && <Spinner />}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}>
        <div className="container">     
            <div className="row">
                {articles.map((element) => {
                    return <div  key={element.url} className="col-md-4">
                    <Newsitem title={element.title?element.title.slice(0, 60):""} author={element.author} date={element.publishedAt}
                    description={element.description?element.description.slice(0, 100):""} newsUrl={element.url} 
                    imageUrl={element.urlToImage?element.urlToImage:"https://images.macrumors.com/t/Xwf_RjW2ycEb6k9nxYlxbrJLlkk=/1600x/article-new/2024/06/top-stories-15jun2024.jpg"}/>
                    </div>
                })}
            </div>
        </div>
        </InfiniteScroll>
      </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
