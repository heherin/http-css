// ===== 1. DOM 요소 가져오기 =====
const todoForm = document.getElementById('itemForm');
const todoInput = document.getElementById('itemInput');
const todoList = document.getElementById('itemList');

// 할 일 데이터를 저장할 배열
let todos = [];

// ===== 2. 버튼 클릭(=폼 제출) 시 할 일 추가 =====
todoForm.addEventListener('submit', (e) => {
  e.preventDefault(); // 새로고침 방지

  const text = todoInput.value.trim();
  if (text === '') {
    alert('할 일을 입력해주세요.');
    return;
  }

  // 새 할 일 객체 생성
  const newTodo = {
    id: Date.now(),
    text: text
  };

  // 배열에 추가
  todos.push(newTodo);

  // 입력창 비우기
  todoInput.value = '';
  todoInput.focus();

  // 화면 다시 그리기
  render();
});

// ===== 3. 배열을 화면에 리스트로 그리기 =====
function render() {
  todoList.innerHTML = ''; // 기존 목록 초기화

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.textContent = todo.text;

    todoList.appendChild(li); // ul(todoList)에 li 추가
  });
}