const arr = ['html', 'css', "js"]
const createUl = document.createElement('ul')
let render = (arr) => {
    for(i = 0; i < arr.length; i++){
        let list = document.createElement('li')
        list.innerHTML = arr[i]
        createUl.append(list)
    }
}
render(arr)
document.body.append(createUl)

