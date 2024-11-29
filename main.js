import './style.css'
import Header from './components/Header/Header/Header'
import Movies from './components/Header/Movies/Movies'



document.querySelector("#app").innerHTML = `
${Header()}
${Movies()}

`

