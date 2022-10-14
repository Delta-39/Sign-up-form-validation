const miFormulario = document.querySelector('.btn')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const pass = document.querySelector('#pass-error')
const mailError = document.querySelector('#mail-error')

miFormulario.addEventListener('click', (e) =>{
    e.preventDefault;
    fillPassword();
    validMail();
})

//Password field  completetion function
const fillPassword = () =>{
    if (password.value === '') {
        pass.style.display = 'flex'
     } else{
         pass.style.display = 'none'
     }
}

//Mail validation Function

const validMail = () =>{
    const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (pattern.test(email.value)) {
        mailError.style.display = 'none'
    } else {
        mailError.style.display = 'flex'
    }
}