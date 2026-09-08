// task-1
const one = document.getElementById('one');
const i = document.getElementById('i');
i.addEventListener('click', () => {
  one.innerText = 'Hello JavaScript';
});

// task-2
const two = document.getElementById('two');
const ii = document.getElementById('ii');
ii.addEventListener('click', () => {
  two.innerText = 'I love JavaScript';
});

// task-3
const three = document.getElementById('three');
const iii = document.getElementById('iii');
const iv = document.getElementById('iv');

iii.addEventListener('click', () => {
  three.style.display = 'block';
});
iv.addEventListener('click', () => {
  three.style.display = 'none';
});

// task-4
const four = document.getElementById('four');
const v = document.getElementById('v');

v.addEventListener('click', () => {
  four.style.background = '#25CCF7';
});

// task-5
const five = document.getElementById('five');
const vi = document.getElementById('vi');
let count = 0;
vi.addEventListener('click', () => {
  count++;
  five.innerText = count;
});

// task-6
const six = document.getElementById('six');
const vii = document.getElementById('vii');
let counted = 50;
vii.addEventListener('click', () => {
  counted--;
  six.innerText = counted;
});

// task-7
const seven = document.getElementById('seven');
const seven1 = document.getElementById('seven1');
const seven2 = document.getElementById('seven2');
const seven3 = document.getElementById('seven3');
let number = 0;

seven1.addEventListener('click', () => {
  number = 0;
  seven.innerText = number;
});
seven2.addEventListener('click', () => {
  number--;
  seven.innerText = number;
});
seven3.addEventListener('click', () => {
  number++;
  seven.innerText = number;
});

// task-8
const namea = document.getElementById('name');
const namebtn = document.getElementById('namebtn');
const namep = document.getElementById('namep');

namebtn.addEventListener('click', () => {
  const inputValue = namea.value.trim();
  if (inputValue !== '') {
    namep.innerText = `Hello ${inputValue}`;
  }
});

// task-9
const img = document.getElementById('img');
const imgbtn = document.getElementById('imgbtn');
imgbtn.addEventListener('click', () => {
  img.src = 'img/2.png';
});

// task-10
const para = document.getElementById('para');
const parabtn = document.getElementById('parabtn');
parabtn.addEventListener('click', () => {
  para.style.color = 'red';
});

// task-11
const usernameIn = document.getElementById('username');
const passwordIn = document.getElementById('password');
const logbtn = document.getElementById('logbtn');
const logmge = document.getElementById('logmge');

logbtn.addEventListener('click', () => {
  const username = usernameIn.value.trim();
  const password = passwordIn.value.trim();
  if (username === 'admin' && password === '1234') {
    logmge.innerText = 'Login Successful';
    logmge.style.color = 'green';
  } else {
    logmge.innerText = 'Invalid Username or Password';
    logmge.style.color = 'red';
  }
});

// task-12
const ageIn = document.getElementById('age');
const agebtnIn = document.getElementById('agebtn');
const agemge = document.getElementById('agemge');

agebtnIn.addEventListener('click', () => {
  const age = Number(ageIn.value.trim());

  if (!isNaN(age) && age >= 18) {
    agemge.innerText = 'You can Vote';
    agemge.style.color = 'green';
  } else {
    agemge.innerText = 'You cannot vote';
    agemge.style.color = 'red';
  }
});

// task-13
const numOne = document.getElementById('num1');
const numTwo = document.getElementById('num2');
const numBtn = document.getElementById('numbtn');
const numMge = document.getElementById('nummge');

numBtn.addEventListener('click', () => {
  const val1 = numOne.value.trim();
  const val2 = numTwo.value.trim();

  if (val1 !== '' && val2 !== '' && !isNaN(val1) && !isNaN(val2)) {
    const sum = Number(val1) + Number(val2);
    numMge.innerText = `Result = ${sum}`;
  } else {
    numMge.innerText = 'Please enter valid numbers';
  }
});

// task-14
const evenOddInput = document.getElementById('even-odd-input');
const btnEvenOdd = document.getElementById('btn-even-odd');
const evenOddResult = document.getElementById('even-odd-result');

btnEvenOdd.addEventListener('click', () => {
  const inputVal = evenOddInput.value.trim();

  if (inputVal === '' || isNaN(inputVal)) {
    evenOddResult.innerText = 'Please enter a valid number.';
    return;
  }

  const num = Number(inputVal);
  evenOddResult.innerText = `${num} is ${num % 2 === 0 ? 'Even' : 'Odd'}`;
});

// task-15
const todoInput = document.getElementById('todo-input');
const btnAddTodo = document.getElementById('btn-add-todo');
const todoList = document.getElementById('todo-list');

btnAddTodo.addEventListener('click', () => {
  const taskText = todoInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.className = 'bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 font-medium flex items-center justify-between shadow-sm';
    li.innerText = taskText;
    todoList.appendChild(li);
    todoInput.value = '';
  }
});
