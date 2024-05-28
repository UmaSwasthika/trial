document.addEventListener('DOMContentLoaded',  (event) => {
  const seePassword =  () => {
    const seePwdIcon = document.querySelector('.see-password'),
          pwdInput = document.querySelector('.group input')

    seePwdIcon.addEventListener('mousedown', () => {
      pwdInput.type = 'text'
    })

    seePwdIcon.addEventListener('mouseup', () => {
      pwdInput.type = 'password'
    })

    seePwdIcon.addEventListener('mouseover', () => {
      pwdInput.type = 'password'
    })
  }

  seePassword()
})

const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");


hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});


hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());


showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});


hidePopupBtn.addEventListener("click", () => showPopupBtn.click());


signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

