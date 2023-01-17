const cunslerLists = document.querySelector('.cunsler-lists')
const visibility_app = document.querySelector('.book-appointment')
const blur = document.querySelector('.blur')
const closeForm = function () {
    blur.style.filter = ''
    visibility_app.style.visibility = "hidden"

}
let url = "https://6350def83e9fa1244e4f2581.mockapi.io/counsler";
let appurl = "https://6350def83e9fa1244e4f2581.mockapi.io/appointment"
async function getData() {
    try {
        let data = await fetch(url)
        let res = await data.json()
        // console.log(res)

        var profileVisit = function (id) {
            // var getId = element.id;
            // localStorage.setItem("Id", getId)
            // console.log(getId)
            // location.href = "consultant-profile.html"


        }


        res.forEach(element => {



            cunslerLists.innerHTML += `<div class="counsler">
            <div class="row">
                <div class="col consultantImage">
                    <div class="counsler-img">
                        <img src="${element.image}" alt="image">
                    </div>
                </div>
                <div class="col consultantInfo">
                    <h4>${element.name}</h4>
                    <h6>${element.qualification}</h6>
                    <h7>Specialized in ${element.specialization}</h7>
                    

                </div>
            </div><br />
            <div className="row">
             <button name="name" class="btn btn-outline-light" onClick="profileVisit(${element.id})" >View Profile </button> 
             <button class="btn btn-outline-light" onClick="bookAppointment(${element.id})">Book Appointment</button>
            </div>
        </div>
        <hr/>
        
       
 
        `




        });


    }
    catch (err) {
        console.log(err)
    }
}
getData();

let profileVisit = function (id) {
    var getId = id;
    var params = new URLSearchParams();
    params.append("Id", getId)
    var url = "consultant-profile.html?" + params.toString();
    location.href = url;
    console.log(params.toString())

}

const bookAppointment = async function (id) {

    visibility_app.style.visibility = "visible"
    blur.style.filter = "blur(5px)"
    visibility_app.innerHTML += `
            <span style="float:right;margin-top:-15px;top:-15px;margin-right:-10px; position: -webkit-sticky;position:sticky;" onclick="closeForm()"><i class="fas fa-times"></i></span><br/>
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name">
                <div id="" class="form-text">Enter Name of Client</div>
            </div>

            <div class="mb-3">
                <label for="contact" class="form-label">Mobile No.</label>
                <input type="number" class="form-control" id="contact">
                <div id="" class="form-text">Enter Mobile No. of Client</div>
            </div>

            <label for="date">Date: </label>
            <input type="date" id="date" name="date">
            <br>
            <br>

            <select class="form-select" aria-label="Default select example">
                <option selected>Select Time</option>
                <option value="10am to 12 am">10am to 12 pm</option>
                <option value="12pm to 1:30 pm">12pm to 1:30 pm</option>
                <option value="2:30pm to 4:30pm">2:30pm to 4:30pm</option>
            </select>
            <br />
            <div class="mb-3">
                <label for="description" class="form-label">Description About Why you Need
                    Counseling</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
            </div>

            <button type="button" class="btn btn-outline-light" onclick="sendAppointment(${id})">Book
                Appointment</button>

        `
    // console.log(id)
}
let userInfo = JSON.parse(sessionStorage.getItem('userData'))[0]
console.log(userInfo.email)
const sendAppointment = function (id) {

    // let userInfo = sessionStorage.getItem('userData')
    const user_Id = JSON.parse(sessionStorage.getItem('userData'))[0].id
    const consultant_Id = id
    const Name = visibility_app.querySelector('#name').value
    const Contact = visibility_app.querySelector('#contact').value
    const Date = visibility_app.querySelector('#date').value
    const Time = visibility_app.querySelector('.form-select').value
    const Description = visibility_app.querySelector('#description').value

    let data = {
        user_id: user_Id,
        consultant_id: consultant_Id,
        name: Name,
        contact: Contact,
        date: Date,
        time: Time,
        description: Description
    }
    fetch('https://6350def83e9fa1244e4f2581.mockapi.io/appointment', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);

        })
        .catch((error) => {
            console.error('Error:', error);
        });

}





// (function () {
//     ('form').submit(function () {
//         ('#result').text(JSON.stringify(('form').serializeObject()));
//         return false;
//     });
// });