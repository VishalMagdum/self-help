const loin_form = document.querySelector('form');
const efield = loin_form.querySelector('.email');
const einput = efield.querySelector('input');
const pfield = loin_form.querySelector('.password');
const pinput = pfield.querySelector('input');
const Eerror = loin_form.querySelector('.eError');

Perror = loin_form.querySelector('.pError');

loin_form.onsubmit = (e) => {
    e.preventDefault();
    if (einput.value == "") {
        efield.style.border = "2px solid red"
        efield.classList.add('shake')
        Eerror.innerHTML = '<ul><li>Email is required</li></ul>'
    } else {

    }
    if (pinput.value == "") {
        pfield.style.border = "2px solid red"
        pfield.classList.add('shake')
        Perror.innerHTML = '<ul><li>Password is required</li></ul>'
    } else {
        Perror.innerHTML = ''
        pfield.style.border = "none"

    }
    setTimeout(() => {
        efield.classList.remove('shake')
        pfield.classList.remove('shake')
    }, 500);

}
einput.onkeyup = () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!einput.value.match(pattern)) {
        Eerror.innerHTML = '<ul><li>inaild email</li></ul>'
    } else {
        Eerror.innerHTML = ''

    }

    if (einput.value.length > 0) {
        efield.style.border = "none"

    }

}
// pinput.onkeyup = () => {
//     if (pinput.value.length > 0) {
//         pfield.style.border = "none"

//     }
// }

function loginF() {

    if (efield.style.border == "none" && pfield.style.border == "none") {
        const loginE = einput.value;
        const loginP = pinput.value;

        fetch('https://6350def83e9fa1244e4f2581.mockapi.io/counsler')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                let consultant = data.filter((e) => {
                    return (e.email === loginE && e.password === loginP)

                })

                if (consultant.length == 1) {
                    console.log("start")
                    sessionStorage.setItem('consultantData', JSON.stringify(consultant))
                    window.location.href = "/bussiness/home.html"
                    console.log("end")
                } else {
                    Perror.innerHTML = '<ul><li>Invalid Email/Password</li></ul>'
                }


            }

            )




    }
}