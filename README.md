<h1>React Redux와 함께 Redux Toolkit을 설정하고 사용하는 방법</h1>



<li>1. 프로젝트에 리덕스 및 툴킷 설치 (npm i @reduxjs/toolkit react-redux)</li>
<li>2. 디렉토리 안에 파일을 만들어 빈 Redux 스토어를 만들고 보내는 것으로 시작</li>
<div><img width="497" alt="image" src="https://github.com/jumpjoong/react-redux-test/assets/100519998/902cf60b-eab0-4070-8e06-cee69d47f92e"></div>
</br>
<li>
  <ul>3. 스토어를 사용할 컴포넌트를 스토어로 감싸면 하위 컴포넌트는 해당 스토어 사용 가능</ul>
  <ul>3-1. Provider는 Redux에서 제공하는 컴포넌트이다.</ul>
  <ul>3-2. store는 import 된 store를 prop로 store라는 이름으로 넘김(하위 컴포넌트에서 store로 접근 가능) </ul>
</li>
<div><img width="657" alt="image" src="https://github.com/jumpjoong/react-redux-test/assets/100519998/7c0db83b-850e-43f9-8698-5c43b74ec37c"></div>
</br>
<li>
  <ul>4. Redux Toolkit에서 제공하는 함수인 CreateSlice를 이용해서 Redux 스토어를 구성하고 리듀서 및 액션생성자를 생성하는데 사용</ul>
  <ul>4-1. Name은 기능 관련된 이름으로 지어줌(아무 기능도 안하는거 같음)</ul>
  <ul>4-2. initialState는 초깃값 설정 </ul>
  <ul>4-3. reducers 안에서 작동 할 함수를 만들면 됨</ul>
  <ul>4-3-1. 함수명: () => {} 화살표 함수나, 함수명() {} 이런 식으로도 가능</ul>
</li>
<div><img width="802" alt="image" src="https://github.com/jumpjoong/react-redux-test/assets/100519998/600586e4-9d6d-48f2-ba9b-61aa0f80eea4"></div>
