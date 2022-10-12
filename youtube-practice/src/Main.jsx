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

class Main extends React.Component {
  constructor(props) {
    // ** 클래스형 컴포넌트를 사용하기 위해서는 constructor(props)-> super(props)를 작성해줘야한다.
    super(props);
    // ** state를 사용하기 위해서는 import React, { Component } from 'react'를 불러와야 하는것 아닌지? => class App extends React.Component 즉, React 안에 Component 를 불러왔기 때문에 괜찮다.
    this.state = {
      videoDatas: [],
      query: "",
      nextPageToken: "",
      videoId: "",
    };

    this.defaultState = this.state; // 초기화 default 작성
    this.getYoutube = this.getYoutube.bind(this); // bind를 쓰는 정확한 이유? => 묶는다는 메서드다.
    this.setVideoId = this.setVideoId.bind(this);
    this.getData = this.getData.bind(this);
  }

  async getData() {
    //** getData앞에 함수 function 은 생략된건지? => class 안에서는 function이 생략 가능하다.
    const URL = "https://www.googleapis.com/youtube/v3/search"; //** URL이라는 변수에 주소값을 할당

    const params = {
      //** params이라는 객체 안에 key,q,pageToken,part라는 키:값을 할당
      key: "AIzaSyCfVt3Fh8IrvK24xxr4aGPg7yoVcvS0XsI",
      q: this.state.query,
      pageToken: this.state.nextPageToken,
      part: "snippet",
    };
      // async 는 await(=promise)를 묶기 위해 사용하는 메서드이고, try는 시도하는 메서드, catch는 에러가 던져졌을 때 어떻게 할지 동작하는 메서드.
    try {
      const { data } = await axios.get(URL, { params }); 
      // URL에 params가 포함된 형태로( ? ) GET 방식 통신을 진행.
      // URL 내부에서 어떤 처리 -> (res.send, res.json) 같은 식의 응답이 올 거예요.
      // 그때 그 응답이 { data: ~~~ } 요런 형태기 때문에 const { data } 라는 구조분해를 이용해 data를 받아오는 거고
      // 여기서 await를 쓴 이유는 통신을 할 때는 비동기 이기 때문에 통신이 끝나기 전에 원래는 다음 코드를 실행한다.
      // 즉, 아래 console.log(data);가 await 가 없다면 null이 나오는 거죠.

      // axios.get(url, {config}]) 서버에서 데이터를 가져올 때 사용하는 메서드
      // 두 번째 파라미터 ",config" 객체에는 헤더(header), 응답초과시간(timeout), 인자 값(params)등의 요청 값을 같이 넘길 수 있다.
      // ** { data } 라는 객체 안에 axios.get(URL, { params } 값을 할당 -> 왜 data라고 안하고 { }를 넣는지? => 구조분해를 이용하기 때문 data.data 라고 표현할 수 도 있음
    
      console.log(data);

      this.setState(
        {
          videoDatas: [...this.state.videoDatas, ...data.items], // state.videoDatas의 내용에 위에서 선언한 {data} 객체 안에 itmes의 내용을 추가시킨다.
          query: this.state.query, 
          nextPageToken: data.nextPageToken, // state.nextPageToken의 내용을 위에서 선언한 {data} 객체 안에 nextPageToken의 내용으로 바꾼다.
        },
        () => console.log(data) // console.log(data)라고 쓰지않고 화살표 함수를 쓴 이유는? => setState값을 바뀐상태에서 또 바꾸기위해서 this.setState({},()=>{})로 사용할 수 있다.
      );
    } catch (error) {
      //** catch에서 받아오는 error 객체를 통해 응답상태코드와 응답헤더정보를 파악할 수 있다.
      console.error("에러", error); 
    }
  }

  componentDidMount() {
    // ** componenetDidMount -> 렌더링 이후 즉시 this.getData 함수호출 , 사용이유? => 렌더링이 된 후에 함수를 호출해야되는데 그냥 함수를 호출하면 바뀐게 아무것도 없이 호출됨.
    this.getData();
  }

  getYoutube(query) {
    console.log("getYoutube");
    if (!query) return; // query가 비어있으면 조건문을 나간다.
    if (this.state.query !== query) {
      // this.state.query 와 파라미터 query가 같지 않으면 초기화 시켜라.
      this.setState(this.defaultState);
    }
    else return; // this.state.query 와 파라미터 query가 같으면 조건문을 나간다.
    
    this.setState({ query: query }); // setState의 query를 파라미터 query값으로 바꾸고 getData()함수를 실행해라
    this.getData();
  }

  setVideoId(id) {
    this.setState({ videoId: id }); // setState의 videoId를 파라미터 id로 바꿔라.
  }

  render() {
    const { videoId } = this.state;

    return (
      <div className="App">
        <Nav>
          <SearchBar onSearchVideo={debounce(this.getYoutube, 500)}></SearchBar>
        </Nav>

        <hr></hr>
        
        <main>
          <div className="c3">
            {
              videoId != "" ? (
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

export default Main;

// ** debounce : 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것
// ** onSearchVideo 는 자료가 많이 없는데 자주 쓰는 표현인지? 입력받고 실시간으로 데이터를 불러오는 명령어가 맞는지?
// ** videoId가 참이면 <VideoPlayer videoId={videoId}></VideoPlayer> 실행? 거짓이면 <VideoList {...this.state} onSetVideoId={this.setVideoId} />????
// ** 굳이 위의 식을 render 안 에 쓸 필요가 있는건지?

// ** jsx와 js파일의 차이점은 무엇인지?
