import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Newsitem from "./Newsitem";
import styled from "styled-components";
import Navbarnews from "./Navbarnews";
import { useState, useEffect } from "react";

function News1({ country, cat }) {
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=82de57a6d9e04f3d942d410cd2cb62a9&page=1`;

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setPage(1);
        setTotal(data.totalResults);
        setLoading(false);
      });
  }, [url]);

  function fetchMoreData() {
    setLoading(true);
    setPage((prev) => prev + 1);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles((prev) => [...prev, ...data.articles]);
        setTotal(data.totalResults);
        setPage((prev) => prev + 1);
        setLoading(false);
      });
  }

  return (
    <>
      return (
      <>
        <div>
          <Box>
            <Navbarnews cat = {cat}></Navbarnews>
            <center>
              <h1 style={{ fontSize: "6vw", marginTop: "150px" }}>
                Top-{capitalizeFirstLetter(cat)} Head Lines
              </h1>
            </center>
            {loading && (
              <center>
                <img src="./images/Spin.gif" alt="loading..." />
              </center>
            )}
            <div className="container">
              <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== total && articles.length <= 20}
                loader={
                  articles.length <= 20 &&
                  articles.length !== total && (
                    <h4>
                      <center>
                      <img src="./images/Spin.gif" alt="loading..." />
                      </center>
                    </h4>
                  )
                }
              >
                <div className="container">
                  <div className="row">
                    {articles.map((article) => {
                      return (
                        <div className="col-md-4 my-3" key={article.url}>
                          <Newsitem
                            title={article.title}
                            description={article.description}
                            imageURL={article.urlToImage}
                            newsURL={article.url}
                            source={article.source.name}
                          ></Newsitem>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </InfiniteScroll>
            </div>
          </Box>
        </div>
      </>
      );
    </>
  );
}

export default News1;

const Box = styled.section`
  margin-top: 80px;
`;
