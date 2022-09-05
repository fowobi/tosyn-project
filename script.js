var images, arrayimage;


images = ['https://images.unsplash.com/photo-1636484227625-c659d25dc1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM4MXxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1585692612592-54e06c016fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4MnxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1640803971060-d7724041c09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUzNnxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1646148707098-a27b818d5c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzNnxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'];
let element_showing_image = document.getElementById('showing-image');
arrayimage = images.shift();
element_showing_image.setAttribute("src", arrayimage);
images.push(arrayimage);


document.getElementById('next-btn').addEventListener('click', (event) => {
  let element_showing_image2 = document.getElementById('showing-image');
  arrayimage = images.shift();
  element_showing_image2.setAttribute("src", arrayimage);
  images.push(arrayimage);

});

document.getElementById('previous-btn').addEventListener('click', (event) => {
  let element_showing_image3 = document.getElementById('showing-image');
  arrayimage = images.pop();
  element_showing_image3.setAttribute("src", arrayimage);
  images.unshift(arrayimage);

});

var earnings, input_value, expenses, balance, earning_total, expenses_total;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings = [];
expenses = [];
balance = [];
earning_total = 0;
expenses_total = 0;


document.getElementById('button').addEventListener('click', (event) => {
  input_value = getNumberOrString(document.getElementById('input').value);
  if (input_value > 0) {
    earnings.unshift(input_value);
    let element_earnings_list = document.getElementById('earnings-list');
    let new_li = document.createElement('li');
    let new_span = document.createElement('span');
    new_span.innerText = earnings.reduce((a,b) => a+b, 0);

    new_li.appendChild(new_span);

    element_earnings_list.appendChild(new_li);
  }
  let element_earn_total = document.getElementById('earn-total');
  element_earn_total.innerText = earnings.reduce((a,b) => a+b, 0);

});

document.getElementById('button').addEventListener('click', (event) => {
  input_value = getNumberOrString(document.getElementById('input').value);
  if (input_value < 0) {
    expenses.unshift(input_value);
    let element_expenses_list = document.getElementById('expenses-list');
    let new_li2 = document.createElement('li');
    let new_span2 = document.createElement('span');
    new_span2.innerText = expenses.reduce((a,b) => a+b, 0);

    new_li2.appendChild(new_span2);

    element_expenses_list.appendChild(new_li2);
  }
  let element_expense_total = document.getElementById('expense-total');
  element_expense_total.innerText = expenses.reduce((a,b) => a+b, 0);

});

document.getElementById('button').addEventListener('click', (event) => {
  balance.unshift(getNumberOrString(document.getElementById('input').value));
  let element_balance = document.getElementById('balance');
  element_balance.innerText = balance.reduce((a,b) => a+b, 0);

});


var comment;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


comment = [];


document.getElementById('comment-sub').addEventListener('click', (event) => {
  comment = getNumberOrString(document.getElementById('ta-comment').value);
  let element_comment_list = document.getElementById('comment-list');
  let new_li = document.createElement('li');
  new_li.innerText = comment;

  element_comment_list.appendChild(new_li);

});