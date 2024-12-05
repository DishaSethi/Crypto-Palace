import React, { useEffect, useState } from 'react';
import './News.css';
const News = () => {
const [news,setNews]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null);
const [currentPage, setCurrentPage]=useState(1);
const [startIndex, setStartIndex] = useState(0);
const itemsPerPage=6;
const pagesToShow=3;

useEffect(()=>{
    const fetchNews=async()=>{
        setLoading(true);
        try{
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=0b7f2e7d1fcb451e93bc762e4ee91b52`
              );

              if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
              }
          
              const data=await response.json();
              setNews(data.articles);
              setLoading(false);
        }catch(error){
            setLoading(false);
        }
    };

    fetchNews();
},[]);


const indexOfLastItem=currentPage*itemsPerPage;
const indexOfFirstItem=indexOfLastItem-itemsPerPage;
const currentItems=news.slice(indexOfFirstItem,indexOfLastItem);

const totalPages=Math.ceil(news.length/itemsPerPage);


const handlePageClick=(pageNumber)=>{
    setCurrentPage(pageNumber);
}

const handlePrevSet=()=>{
    if(startIndex>0){
        setStartIndex(startIndex-pagesToShow);
    }
};

const handleNextSet=()=>{
    if(startIndex+pagesToShow<totalPages)
    {
        setStartIndex(startIndex+pagesToShow);
    }
}

const pageButtons=[];
for(let i=startIndex+1;i<=Math.min(startIndex+pagesToShow,totalPages);i++){
    pageButtons.push(i);
}

  return (
    <div className='news-container'>
        <h2>Latest Crypto News</h2>
      {
        loading?(
            <p>Loading news...</p>
        ):(<>
            
            <div className="news-list">
            {currentItems.map((article,index)=>(
                <div className="news-card" key={index}>

                    <img src={article.urlToImage} alt={article.title} />

                    <div className="news-content">
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>

                        <a href={article.url} target='_blank' rel='noopener noreferrer'>
                            Read More
                        </a>
                    </div>
                </div>
            ))}
            </div>

<div className="pagination">
<button onClick={handlePrevSet} disabled={startIndex===0}>
    &lt;
</button>
{pageButtons.map((page)=>(
    <button key={page}
    onClick={()=> handlePageClick(page)}
    className={currentPage===page?'active':''}>
        {page}

    </button>
))

}
<button onClick={handleNextSet} disabled={startIndex+pagesToShow>=totalPages}>
&gt;
</button>
</div>
</>
        )
      }
    </div>
  );
}

export default News;
