const h1 = document.querySelector('h1')
const div = document.createElement('div')
div.innerHTML = 'zecadoido'

h1.onclick = function bota(){
h1.prepend(div)
}   