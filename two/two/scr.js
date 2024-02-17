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

// popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// --------------------




    const exampleText = ['I can write a whole sentence.', 'Or', 'single', 'words'];
    const exampleTyping = new AutoTyping('.example-selector', exampleText, {
        typeSpeed: 50,
        deleteSpeed: 50,
        waitBeforeDelete: 2000,
        waitBetweenWords: 500,
    });
    exampleTyping.start()

    // -------------------------
    //   const exampleText = ['Front-End Developer', 'Web Developer', 'Ui/Ux Designer', 'Full-Stack Developer'];
    //   const exampleTyping = new AutoTyping('.example-selector', exampleText, {
    //       typeSpeed: 50,
    //       deleteSpeed: 50,
    //       waitBeforeDelete: 2000,
    //       waitBetweenWords: 500,
    //   });
    //   exampleTyping.start()
  