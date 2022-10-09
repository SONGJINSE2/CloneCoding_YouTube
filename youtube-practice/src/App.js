import React from "react";
import "./App.css";
import axios from "axios";
import Nav from "./Nav/Nav";
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VideoList/VideoList";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import InfiniteScroll from "react-infinite-scroller";
import spinner from "./spinner.gif";
import { v4 } from "uuid";
import { debounce } from "loadsh";
import VideoListItems from "./VideoList/VideoListItems";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoDatas: [],
      query: "",
      nextPageToken: "",
      videoId: "",
    };

    this.defaultState = this.state; // 초기화 default 작성
    this.getYoutube = this.getYoutube.bind(this);
    this.setVideoId = this.setVideoId.bind(this);
    this.getData = this.getData.bind(this);
  }

  async getData() {
    //** getData앞에 함수 function 은 생략된건지?
    const URL = "https://www.googleapis.com/youtube/v3/search"; //** URL이라는 변수에 주소값을 할당

    const params = {
      //** params이라는 객체 안에 key,q,pageToken,part라는 키:값을 할당
      key: "AIzaSyDC9_BVMCwJBw0k0weGf51Y4S39G-r05iI",
      q: this.state.query,
      pageToken: this.state.nextPageToken,
      part: "snippet",
    };

    try {
      //** try라는 객체 안에 할당?
      const { data } = await axios.get(URL, { params });
      console.log(data);
      this.setState(
        {
          videoDatas: [...this.state.videoDatas, ...data.items],
          q: this.state.query,
          nextPageToken: data.nextPageToken,
        },
        () => console.log(data)
      );
    } catch (error) {
      console.error("에러", error);
    }
  }
  componentDidMount() {
    this.getData();
  }

  async getYoutube(query) {
    console.log("getYoutube");
    if (!query) return;
    // 여기 작성
    if (this.state.query !== query) {
      this.setState(this.defaultState);
    }

    this.setState({ q: query });
    this.getData();
  }

  setVideoId(id) {
    this.setState({ videoId: id });
  }

  render() {
    const { videoId } = this.state;
    return (
      <div className="App">
        <Nav>
          <SearchBar onSearchVideo={debounce(this.getYoutube, 500)}></SearchBar>
        </Nav>
        <main>
          <div className="c3">
            {
              videoId ? (
                <VideoPlayer videoId={videoId}></VideoPlayer>
              ) : (
                // <InfiniteScroll
                //   loadMore = {() => this.getYoutube(this.state.query)}
                //   hasMore = {!!this.state.nextPageToken}
                //   loader = {
                //       <div key={v4()}>
                //       <img src={spinner} alt="로딩 중"></img>
                //       </div>
                //   }
                // >
                <VideoList {...this.state} onSetVideoId={this.setVideoId} />
              )
              // </InfiniteScroll>
            }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
