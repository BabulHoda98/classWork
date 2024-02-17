// header scroll

let nav = document.querySelector('.navbar')
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('header-scrolled')
    }else{
        nav.classList.remove('header-scrolled')
    }
}

//navbar hide
let navLinks = document.querySelectorAll('.nav-link')
console.log(navLinks);
let navCollapse = document.querySelector('.navbar-collapse.collapse')

navLinks.forEach((ele)=>{
    ele.addEventListener('click',function(){
        navCollapse.classList.remove('show')
    })
})

