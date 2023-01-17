const signup_form = document.querySelector('form')
const efield = document.querySelector('.email');
const einput = efield.querySelector('input');
const pfield = document.querySelector('.password');
const pinput = pfield.querySelector('input');


const eError = document.querySelector('.eError');
const pError = document.querySelector('.pError');
const checkPasswordField = document.querySelector('.check');
const checkInput = checkPasswordField.querySelector('input');
const checkError = document.querySelector('.pcheck');

signup_form.onsubmit = (e) => {
    e.preventDefault();
    if (einput.value == "") {
        efield.style.border = "2px solid red"
        efield.classList.add('shake')
        eError.innerHTML = '<ul><li>Email is required</li></ul>'


    } else {
        eError.innerHTML = ''
        efield.style.border = "none"

    }

    if (pinput.value == "") {
        pfield.style.border = "2px solid red"
        pfield.classList.add('shake')
        pError.innerHTML = '<ul><li>Password is required</li></ul>'
    } else {
        pError.innerHTML = ''
        pfield.style.border = "none"


    }
    if (checkInput.value == "") {
        checkPasswordField.style.border = "2px solid red"
        checkPasswordField.classList.add('shake')
        checkError.innerHTML = '<ul><li>Password is required</li></ul>'
    } else {
        checkError.innerHTML = ''
        checkPasswordField.style.border = "none"


    }

    setTimeout(() => {
        checkPasswordField.classList.remove('shake');
        pfield.classList.remove('shake');
        efield.classList.remove('shake')
    }, 500)



}

einput.onkeyup = () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!einput.value.match(pattern)) {
        eError.innerHTML = '<ul><li>invaild email</li></ul>'
        efield.style.border = "1px solid red"
    } else {
        eError.innerHTML = ''
        efield.style.border = "none"


    }



};
pinput.onkeyup = () => {

    let pattern2 = /^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{5,15}$/;

    console.log(!(pinput.value.match(pattern2)))
    if (!(pinput.value.match(pattern2))) {

        pError.innerHTML = '<ul><li>Weak password</li></ul>'
        pfield.style.border = "1px solid red"
        console.log("weak password");


    } else if (pinput.value.length > 15) {
        pError.innerHTML = '<ul><li>To Long</li></ul>'
        pfield.style.border = "1px solid red"

    } else {
        console.log("nice password");
        pError.innerHTML = ''
        pfield.style.border = "none"


    }

};
checkInput.onkeyup = () => {
    let password_check = pinput.value;
    if (!(checkInput.value === password_check)) {
        checkError.innerHTML = '<ul><li>Password not matching</li></ul>'
        checkPasswordField.style.border = "1px solid red"
    } else {
        checkError.innerHTML = '';
        checkPasswordField.style.border = "none";


    };


}
function siginF() {
    if (efield.style.border == "none" && pfield.style.border == "none" && checkPasswordField.style.border == "none") {

        const data = { email: einput.value, password: pinput.value }


        fetch('https://6350def83e9fa1244e4f2581.mockapi.io/shuser', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                window.location.href = "login.html"
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
}








