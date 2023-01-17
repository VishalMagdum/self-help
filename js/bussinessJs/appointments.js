const appointments = document.querySelector('.appointmentList')
const url = "https://6350def83e9fa1244e4f2581.mockapi.io/appointment"
let consultantInfo = JSON.parse(sessionStorage.getItem('consultantData'))[0]

const appList = async function () {
    try {
        let data = await fetch(url)
        let res = await data.json()

        let list = res.filter((e) => e.consultant_id == consultantInfo.id)
        var count = 0;
        list.forEach(element => {

            count++
            appointments.innerHTML += `
                <div class="row card container-fluid">
                    <div class="col image"><h1>${count}. &nbsp;&nbsp</h1>
                        <img src="/image/profile.png" alt="" srcset="">
                    </div>
                    <div class="col name" style="display:flex;align-items:center">
                        <h4>Name:${element.name} Magdum</h4>
                    </div>
                    <div class="col date" style="display:flex;align-items:center">
                        <h4>Date:${element.date}</h4>
                    </div>
                    <div class="col time" style="display:flex;align-items:center">
                        <h4>Time:${element.time}</h4>
                    </div>
                    <div class="col contact" style="display:flex;align-items:center">
                        <h4>Contact:${element.contact}</h4>
                    </div>
                </div>
            
            `
        });
    } catch (error) { }
}
appList();