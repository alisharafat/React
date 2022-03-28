
import NewsBox from './NewsBox'
import React, { useEffect, useState } from 'react';

function News(props) {
    const [articles, setArticles] = useState([]);
    const [page,setPage]=useState(1);
    const [total,setTotal]=useState(0);



    async function getNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page} &pageSize=12`; 
        let data=await fetch(url);
        let parsedData=await data.json();
        setTotal(parsedData.totalResults);
        // console.log(parsedData);
        setArticles(parsedData.articles);


    }
    useEffect(()=>{
        getNews();
    },[page]);

    useEffect(()=>{
        getNews();
        setPage(1);
    },[props.category]);

    const prevFun=()=>{
        if(page>1){
            setPage(page-1);
        }
    }

    const nextFun=()=>{
        if((12*(page))<total){
            setPage(page+1);
        }
    }

  return (
    <div>
    <h1>Top { props.category } Headlines</h1>
    <div  className="container">
    {articles.map((element)=>{
       return <NewsBox  title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}   ></NewsBox>
   })}   

       </div> 
   <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"25px"}}>
           <button onClick={prevFun} > &larr; Prev</button>
           <button onClick={nextFun}>Next &rarr;</button>
       </div>
 </div>
  )
}
export default News

