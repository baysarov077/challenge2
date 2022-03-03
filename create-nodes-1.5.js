let block1 = document.createElement('div')
let block2 = document.createElement('div')
let block3 = document.createElement('div')

block1.className = 'red'
block2.className = 'green'
block3.className = 'blue'

block3.textContent = 'Я вложен'

block1.append(block2)
block2.append(block3)
