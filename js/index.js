function smoothScroll (el, target){
    document.getElementById(el).addEventListener('click', function(){
        document.getElementById(target).scrollIntoView({
            behavior: 'smooth'
        })
    })
}

smoothScroll('nav-about', 'about');
smoothScroll('nav-portfolio', 'portfolio');
smoothScroll('nav-contact', 'contact');
smoothScroll('portfolio-btn', 'portfolio');

document.querySelector('.nav-toggle').addEventListener('click', function(){
    document.querySelector('.nav-menu').classList.toggle('is-active');    
});