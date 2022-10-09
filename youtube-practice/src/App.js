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
    // ** 클래스형 컴포넌트를 사용하기 위해서는 constructor-> super를 작성해줘야한다.
    super(props);
    // ** state를 사용하기 위해서는 import React, { Component } from 'react'를 불러와야 하는것 아닌지?
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
      //** try라는 객체 안에 할당? 앞에 키워드가 없는 이유는? 다른 명령어 인건지?
      const { data } = await axios.get(URL, { params });
      // ** axios.get(url{,config}]) 서버에서 데이터를 가져올 때 사용하는 메서드
      // ** 두 번째 파라미터 ,config 객체에는 헤더(header), 응답초과시간(timeout), 인자 값(params)등의 요청 값을 같이 넘길 수 있다.
      // ** { data } 라는 객체 안에 axios.get(URL, { params } 값을 할당 -> 왜 data라고 안하고 { }를 넣는지?
      // ** await 는 프로미스가 끝날때 까지 기다린다는 뜻인데 정확히 무엇을 기다렸다가 실행되는건지? 실행된다는것은
      // ** { data }객체 안에 할당되는 것을 얘기하는 건지?
      console.log(data);
      this.setState(
        {
          videoDatas: [...this.state.videoDatas, ...data.items],
          q: this.state.query,
          nextPageToken: data.nextPageToken,
        },
        // ** 위에 this.state에 할당 된 값을 this.setState 값으로 바꿔라
        () => console.log(data) // ** console.log(data)라고 쓰지않고 화살표 함수를 쓴 이유는?
      );
    } catch (error) {
      //** catch에서 받아오는 error 객체를 통해 응답상태코드와 응답헤더정보를 파악할 수 있다.
      console.error("에러", error); // console.log(error) 라고 표현할 수는 없는건지? console.error와 ("에러", error)는 무슨뜻인지?
    }
  }

  componentDidMount() {
    // ** componenetDidMount -> 렌더링 이후 즉시 this.getData 함수호출 , 사용이유?
    this.getData();
  }

  async getYoutube(query) {
    console.log("getYoutube");
    if (!query) return; // ** query가 아니면 return? 무슨값을 return?
    if (this.state.query !== query) {
      // ** 위에 선언한 this.state.query값이 query와 다르면 this.setState<여기서 뜻하는 query는 무엇을 의미하는지?
      this.setState(this.defaultState);
    }
    // ** setState함수를 실행해라
    // ** this.setState뒤에 키:값으로 나오는건 알겠는데 저렇게 this.defaultState를 쓰면 어쩌라는건지 모르겠음..정확한 뜻풀이 필요 ㅠㅠ
    // ** await 가 안보이는데 어떻게 된건지?
    this.setState({ q: query }); // ** setState 함수를 실행해라, q를 query값으로 바꾼다는건데 여기서 query는 어떤걸 의미하는지?
    this.getData(); // ** getData함수를 실행해라
  }

  setVideoId(id) {
    this.setState({ videoId: id }); // ** setState 함수를 실행한다. state안에 videoId를 setVideoId의 id로 바꿔라? 정확한 해석이 필요..
  }

  render() {
    const { videoId } = this.state;
    // ** this.state를 videoId 객체에 할당
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

// ** debounce : 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것
// ** onSearchVideo 는 자료가 많이 없는데 자주 쓰는 표현인지? 입력받고 실시간으로 데이터를 불러오는 명령어가 맞는지?
// ** videoId가 참이면 <VideoPlayer videoId={videoId}></VideoPlayer> 실행? 거짓이면 <VideoList {...this.state} onSetVideoId={this.setVideoId} />????
// ** 굳이 위의 식을 render 안 에 쓸 필요가 있는건지?

// ** jsx와 js파일의 차이점은 무엇인지?
