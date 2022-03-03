const arr = [ {
    name: 'Google',
    url: 'https://google.com'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com'
  },
  {
    name: 'intocode',
    url: 'https://intocode.ru'
  }
]
let createUl = document.createElement('ul')

let func = (arr) => {
    for(i = 0; i < arr.length; i++){
       let list = document.createElement('li')
       let link = document.createElement('a')
       link.href = arr[i].url
       link.innerHTML = arr[i].name
       list.append(link)
       createUl.append(list)
    }
}
func(arr)
document.body.append(createUl)