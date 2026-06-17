/* ==========================
MENU ENCOLHE AO ROLAR
========================== */

const nav = document.querySelector("nav")

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

nav.style.height="68px"

nav.style.background="rgba(5,7,14,.92)"

}

else{

nav.style.height="82px"

nav.style.background="rgba(5,7,14,.75)"

}

})



/* ==========================
MENU ATIVO
========================== */

const sections =
document.querySelectorAll("section")

const menuLinks =
document.querySelectorAll("nav a")

window.addEventListener("scroll",()=>{

let current=""

sections.forEach(section=>{

const top=
section.offsetTop-150

const height=
section.offsetHeight

if(
scrollY>=top
){

current=
section.getAttribute("id")

}

})

menuLinks.forEach(link=>{

link.classList.remove("active")

if(
link
.getAttribute("href")
.includes(current)
){

link.classList.add("active")

}

})

})



/* ==========================
SCROLL MENU
========================== */

menuLinks.forEach(link=>{

link.addEventListener(
"click",
(e)=>{

e.preventDefault()

const target=
document.querySelector(
link.getAttribute("href")
)

window.scrollTo({

top:
target.offsetTop-70,

behavior:
"smooth"

})

})

})



/* ==========================
ACORDEÃO REPERTÓRIO
========================== */

/* ==========================
ACORDEÃO REPERTÓRIO
========================== */

document
.querySelectorAll(".genre-header")
.forEach(item=>{

item.addEventListener(
"click",

()=>{

item
.parentElement
.classList
.toggle("active")

})

})


/* ==========================
ANIMAÇÃO DE ENTRADA
========================== */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(

entry=>{

if(
entry.isIntersecting
){

entry.target
.style.opacity=1

entry.target
.style.transform=

"translateY(0)"

}

}

)

},

{

threshold:.12

}

)

document
.querySelectorAll(

"section"

)

.forEach(

section=>{

section.style.opacity=0

section.style.transform=

"translateY(80px)"

section.style.transition=

"1s"

observer.observe(

section

)

}

)



/* ==========================
CARROSSEL ARRASTÁVEL
========================== */

document
.querySelectorAll(

".carousel"

)

.forEach(

carousel=>{

let pressed=false

let startX=0

let scroll=0

carousel
.addEventListener(

"mousedown",

(e)=>{

pressed=true

startX=e.pageX

scroll=

carousel.scrollLeft

}

)

carousel
.addEventListener(

"mouseup",

()=>{

pressed=false

}

)

carousel
.addEventListener(

"mouseleave",

()=>{

pressed=false

}

)

carousel
.addEventListener(

"mousemove",

(e)=>{

if(
!pressed
)return

e.preventDefault()

const x=

e.pageX

const move=

(x-startX)

carousel
.scrollLeft=

scroll-move

})

})



/* ==========================
REVELAÇÃO CARDS
========================== */

document
.querySelectorAll(

".album"

)

.forEach(

(card,i)=>{

card.style.opacity=0

card.style.transform=

"translateY(40px)"

card.style.transition=

".7s"

setTimeout(()=>{

card.style.opacity=1

card.style.transform=

"translateY(0)"

},

150*i)

})



/* ==========================
CTA CONTATO
========================== */

const button=
document
.querySelector(
"button"
)

if(button){

button
.addEventListener(

"click",

()=>{

alert(

"Entre em contato pelo Instagram ou WhatsApp ⚡"

)

})

}