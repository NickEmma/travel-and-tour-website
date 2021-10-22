let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};
// search file part here 
searchBtn.onclick = ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
};
// login file part 
formBtn.onclick = ()=>{
    loginForm.classList.add('active');
};
formClose.onclick = ()=>{
    loginForm.classList.remove('active');
};
// menu icon file part 
menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// video part here 
videoBtn.forEach(btn =>{
    btn.onclick = ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.toggle('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    };
});
// videoBtn.forEach(btn =>{
//     btn.addEventListener('click', ()=>{
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//             let src = btn.getAttribute('data-src');
//             document.querySelector('#video-slider').src = src;
//     });
// });