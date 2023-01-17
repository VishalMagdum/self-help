const profile = document.querySelector('.profile-container')
let url = "https://6350def83e9fa1244e4f2581.mockapi.io/counsler/";
counslerInfo = JSON.parse(sessionStorage.getItem('consultantData'))
let counslerId = counslerInfo[0].id
console.log(counslerInfo)
// console.log(counslerId)

const profileInfo = async function () {
    try {
        let data = await fetch(url + counslerId)
        let res = await data.json()

        // console.log(res)
        profile.innerHTML += `
            <div>
            <button type="submit" style="float:right ;" onclick="editInfo()"><i
                        class="fas fa-edit editInfo"></i> Edit
                    profile</button>
             <div class="row">
              <div class="col">
                <img src= "/image/profile.png" alt="bb" srcset=""
                    style="max-width:500px;max-height:400px;border-radius: 10px;">
              </div>
             <div class="col">
             <div>
                
                <h1 style="font-size:100px ;">${res.name}</h1><br />
                <h4>Gender: ${res.gender}</h4>
                <h4>Email: ${res.email} </h4>
                <h4>Contact No. ${res.contact}</h4>
                <h4>DOB: ${res.dob}</h4><br />
                <h3>Certification: </h3> <input type="file" name="" id="">
                </div>
              </div>
             </div><br /><br />
              <div class="row extraInfo">
                <div class="col">
                <h4>Qualification: ${res.qualification}</h4><hr/>
                <h4>Language: ${res.language}</h4><hr/>
                <h4>Specializes ${res.specialization}</h4><hr/>
               </div>
               <div class="col">
                <h4 align="justify">
                    ${res.description}
                </h4>
            </div>
        </div>
       </div>

        `




    }



    catch (err) {
        console.log(err)
    }
}

profileInfo();

