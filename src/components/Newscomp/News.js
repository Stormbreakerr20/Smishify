import React, { Component } from "react";
import Spin from "./Spin";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Newsitem from "./Newsitem";
import styled from "styled-components";
import Navbarn from "./Navbarnews";
export default class News extends Component {
  static defaultProps = {
    country:"in",
    cat:'general'
  }
  static propTypes={
    country: PropTypes.string,
  }
  url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=82de57a6d9e04f3d942d410cd2cb62a9&page=1`;
  capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
  articles = []
  constructor(props) {                                                             
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page:1,
      total:0
    };
    document.title=`${this.capitalizeFirstLetter(this.props.cat)}-NewsMonkey`
  }

componentDidMount(){


    this.setState({loading:true})
    fetch(this.url).then(i=>i.json()).then(json=>{
        this.setState({articles:json.articles,page:1,total:json.totalResults,loading:false})
    });
  }
  fetchMoreData = () => {
    this.setState({page:this.state.page +1});
    fetch(this.url).then(i=>i.json()).then(json=>{
        this.setState({articles:this.state.articles.concat(json.articles),total:json.totalResults,page:this.state.page +1,loading:false})

    });
  };


  render() {
    return (
      <>
      <div>
        <Box>
              <Navbarn></Navbarn>
          <center><h1  className="text-dark" style={{fontSize:'6vw',marginTop:"150px"}}>Top-{this.capitalizeFirstLetter(this.props.cat)} Head Lines</h1></center>
            {this.state.loading===true && <center><Spin ></Spin></center>}

          <div className="container">
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.total&&this.state.articles.length <=20}
          loader={this.state.articles.length <=20&& this.state.articles.length !== this.state.total && <h4><center><Spin ></Spin></center></h4>}
        >

          <div className="container">
          <div className="row">
                {this.state.articles.map((i)=>{ 
                    return <div className="col-md-4 my-3" key={i.url}>
                    <Newsitem
                    title={i.title}
                    description={i.description}
                    imageURL={i.urlToImage}
                    newsURL={i.url}
                    mode={this.props.mode}
                    source={i.source.name}
                    ></Newsitem>
                    </div>
                })}
          </div>
          </div>
          </InfiniteScroll>
          </div>
          </Box>

        </div>
      </>
    );
  }

}
const Box = styled.section`
  margin-top: 80px;

  `
