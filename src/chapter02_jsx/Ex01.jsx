import React, {Fragment} from "react";

function Ex01() {
  const name = '리액트를 다루는 기술'
  return(
      <>
        {name.includes('리액트') ?
            <>
            <h1>{name} 안녕!</h1>
            <h2>Fragment는 처음 쓰는데 잘 동작하뉘?</h2>
            </>
            : <h1>ㄴㄴ 리액트 아님</h1>}
      </>
  );
}
export default Ex01