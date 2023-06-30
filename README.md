<h1>React Redux와 함께 Redux Toolkit을 설정하고 사용하는 방법</h1>



<h3>1. 프로젝트에 리덕스 및 툴킷 설치 (npm i @reduxjs/toolkit react-redux)</h3>
<h3>2. 디렉토리 안에 파일을 만들어 빈 Redux 스토어를 만들고 보내는 것으로 시작</h3>
<div><img width="497" alt="image" src="https://github.com/jumpjoong/react-redux-test/assets/100519998/902cf60b-eab0-4070-8e06-cee69d47f92e"></div>
</br>
<ul>
  <h3>3. 스토어를 사용할 컴포넌트를 스토어로 감싸면 하위 컴포넌트는 해당 스토어 사용 가능</h3>
  <li>3-1. Provider는 Redux에서 제공하는 컴포넌트이다.</li>
  <li>3-2. store는 import 된 store를 prop로 store라는 이름으로 넘김(하위 컴포넌트에서 store로 접근 가능) </li>
</ul>
<div><img width="657" alt="image" src="https://github.com/jumpjoong/react-redux-test/assets/100519998/7c0db83b-850e-43f9-8698-5c43b74ec37c"></div>
</br>
<ul>
  <h3>4. Redux Toolkit에서 제공하는 함수인 CreateSlice를 이용해서 Redux 스토어를 구성하고 리듀서 및 액션생성자를 생성하는데 사용</h3>
  <li>4-1. Name은 기능 관련된 이름으로 지어줌(아무 기능도 안하는거 같음)</li>
  <li>4-2. initialState는 초깃값 설정 </li>
  <li>4-3. reducers 안에서 작동 할 함수를 만들면 됨</li>
  <li>4-3-1. 함수명: () => {} 화살표 함수나, 함수명() {} 이런 식으로도 가능</li>
  <li>4-4. 사용할 작동할 함수들을 export로 지정해줌. ex) export const { 기능, 기능 } = counterSlice.action </li>
  <li>4-5. 스토어에서 initialState에 접근하기 위해 export default countSlice.reducer 해야함</li>
</ul>
<div><img width="802" alt="image" src="https://github.com/jumpjoong/react-redux-test/assets/100519998/600586e4-9d6d-48f2-ba9b-61aa0f80eea4"></div>
</br>
<ul>
  <h3>5. 사용방법</h3>
  <li>5-1. 변수에 useSelector를 사용해서 사용할 값에 접근</li>
  <li>5-2. dispatch를 사용해서 4-4에 적힌 함수들을 사용</li>
  <div><img width="595" alt="image" src="https://github.com/jumpjoong/react-redux-test/assets/100519998/eae28a56-4398-44c6-9493-23ceb9c1d7c7">
</div>
</ul>

