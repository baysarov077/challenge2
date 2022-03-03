let createDiv = document.createElement('div')
let createUl = document.createElement('ul')
let createList = document.createElement('li')
let createList2 = document.createElement('li')
let createLink = document.createElement('a')
let createLink2 = document.createElement('a')

createLink.innerHTML = 'наш инстаграмм'
createLink2.innerHTML = 'наш сайт'

createList.append(createLink)
createList2.append(createLink2)

createLink.href = 'https://instagram.com/'
createLink2.href = 'https://instagram.com/'

createLink.target = '_blank'
createLink2.target = '_blank'

createDiv.append(createUl)
createUl.append(createList)
createUl.append(createList2)


console.log(createDiv)

document.body.append(createDiv)


