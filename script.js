let header = document.querySelector("header")

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", this.window.scrollY >100)
})

const mengetik = new Typed(".typing" ,{
    strings: ["Usamah Abdillah Hanif", "Junior Programmer"],
    typeSpeed : 100,
    backSpeed : 100,
})

let menu = document.querySelector("#menu-icon")
let navlink = document.querySelector(".navlink")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navlink.classList.toggle("open")
}