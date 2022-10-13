import React from "react";
import "./Category.css";

const Category = (props) => {
  return (
    <section className="content-button">
      <div>
        <button>전체</button>
        <button>음악</button>
        <button>믹스</button>
        <button>게임</button>
        <button>실시간</button>
        <button>축구</button>
        <button>액션 어드벤쳐 게임</button>
        <button>최근에 업로드된 동영상</button>
        <button>새로운 맞춤 동영상</button>
        <button>뉴스</button>
        <button>연예인</button>
      </div>
    </section>
  );
};

export default Category;
