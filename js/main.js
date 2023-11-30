let todo = document.querySelector('#todo');
// form태그는 이벤트로 제출 즉 submit이라는 이벤트가종류가 존재함
todo.addEventListener('submit', addItem);

function addItem(e) {
	e.preventDefault();
	// form태그의 기본이벤트인 전송,제출의 이벤트를 막아야합니다
	//안그러면 순간보였다 사라짐(전송됨)
	let data = this.elements.writeList.value;
	/* 여기서 this는 이벤트 핸들러가 바인딩된 html요소를 의미함
즉 form태그를 의미하고, 폼태그에는 elements라는 내장 컬렉션
이 있습니다. 이것 현재의 폼의 모든 입력요소라는 의미
모든 입력요소중에 writeList라는 아이디를 가진 요소를 의미합니다
그 내용을 가지고 온다는 의미 */

	let list = document.querySelector('ol');
	let item = document.createElement('li');
	let text = document.createElement('p');
	//js로 DOM을 createElement의 방법으로 생성중
	text.textContent = data;
	this.elements.writeList.value = '';
	//js에서 동적으로 생성한 p태그 안에 data로 받은 값을
	//동적으로 안에 넣어주었습니다
	item.append(text);
	list.append(item);

	let removeBtn = document.createElement('span');
	removeBtn.classList.add('remove');
	item.append(removeBtn);
	//리무브 버튼을 클릭하면 지우고
	//li를 클릭하면 토글로 done표시를 합니다
	removeBtn.addEventListener('click', deleteItem);
	item.addEventListener('click', doneItem);
}
//함수패키징한 목적, this를 {} 코드블록에 가두어서
//this가 지칭하는 이벤트가 li로 한정되어야합니다
//하지만 기존의 this는 폼태그였습니다
function deleteItem() {
	this.parentElement.remove();
}

function doneItem() {
	this.classList.toggle('done');
}
