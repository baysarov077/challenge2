let createUl = document.createElement('ul')
createUl.className = 'list'
let createList = document.createElement('li')
createList.innerHTML = 'Привет, мир'
createUl.append(createList)
console.log(createUl);