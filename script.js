// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);
// j: agoraStatesDiscussions는 사용자의 데이터이다.
// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정
// HTML 요소를 생성하고, 클래스 이름을 지정한다. 왜? DOM 요소로 html 요소를 js에서 조작하기 위해

  const avatarWrapper = document.createElement("div"); // 이름이 avatarWrapper인 div 생성
  avatarWrapper.className = "discussion__avatar--wrapper"; // 이것의 클래스 이름은 html 파일에서 "discussion__avatar--wrapper와 같다"(해당 이름을 같는 요소를 불러온다)
  const discussionContent = document.createElement("div"); // 이름이 discussionContent인 div 생성
  discussionContent.className = "discussion__content"; // 이것의 클래스 이름은 html 파일에서 "discussion__content"와 같다" 
  const discussionAnswered = document.createElement("div"); // 이름이 discussionAnswered인 div 생성
  discussionAnswered.className = "discussion__answered"; // 이것의 클래스 이름은 html 파일에서 "discussion__answered"와 같다"
  // => 이렇게 지정하면, 위의 html 요소들을 js에서 지정한 이름으로 조작할 수 있게 된다.
  
  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  const avatarImg = document.createElement('img'); // 이미지 요소 생성
  avatarImg.className = "discussion__avatar--image";
  avatarImg.src = obj.avatarUrl; // agoraStatesDiscussions[0].avatarUrl // src 속성을 agoraStatesDiscussions 첫번째 요소에 있는 데이터로 넣어준다.
  avatarImg.alt = `avatar of ' ${obj.author}` // agoraStatesDiscussions[0].author // alt 속성을 agoraStatesDiscussions 첫번째 요소에 있는 데이터로 넣어준다.
  avatarWrapper.append(avatarImg); // avataWrapper이라는 html요소에 avatarImg를 넣어준다.
  
  // 작업 목표: avatar 답변을 
  const contentTitle = document.createElement('h2');
  contentTitle.className = "discussion__title";
  
  const titleAnchor = document.createElement('a');
  titleAnchor.href = obj.url; // answer의 url에 접근하려면, obj.answer.url 이 맞나? 확인 필요.
  titleAnchor.textContent = obj.title;
  contentTitle.append(titleAnchor);
  
  const contentInfo = document.createElement('div');
  contentInfo.className = "discussion__information";
  contentInfo.textContent = `${obj.author} / ${new Date(obj.createdAt).toLocaleString()}`;
  discussionContent.append(contentTitle, contentInfo);

  const checked = document.createElement('p');
  checked.textContent = obj.answer ? '☑' : 'x' ;
  discussionAnswered.append(checked);

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
}; // render 함수는 매개변수가 element 이고,
// element가 입력되면, agoraStatesDiscussions의 배열을 순회한다.
// convertToDiscussion 험수는 매개변수 obj가 입력되면, li를 출력한다.
// 

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
