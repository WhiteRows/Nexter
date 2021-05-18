//Navigation bar appearance
const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation__link");
const scrollBtns = document.querySelectorAll(".btn-scroll");

navToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
    navToggle.classList.toggle("active");
    navToggle.blur();
});

//Set up onclick behavior of navigation links
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navigation.classList.toggle("active");
        navToggle.classList.toggle("active");
        const hash = link.hash;
        setTimeout(() => {
            //Scroll to href (smoth)
            document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
        }, 500);
    });
});

//Set up button behavior
scrollBtns.forEach(scrollBtn => {
    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const hash = "#homes";
        setTimeout(() => {
            //Scroll to href (smoth)
            document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
        }, 100);
    })
});
