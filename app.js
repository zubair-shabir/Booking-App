let DB = [];
let submit = document.querySelector('.btn');
let consultations = document.querySelector('#consultations');
let form = document.querySelector('form');
let patientName = document.querySelector('#patient-name');
let contact = document.querySelector('#contact');
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let symptoms = document.querySelector('#symptoms');
let dataBase
let id;
let flag;


let today = new Date();
let minDay = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate() ;
    // alert(minDay);
    document.querySelector('#date').setAttribute('min',minDay);

    

let minTime = today.getHours() + ':' + today.getMinutes();
    // alert(minTime);
    time.setAttribute('min', minTime);

    dataBase = JSON.parse(localStorage.getItem('consultations'));

let consultationsHTML = document.createElement('li');
        
consultationsHTML.classList.add('list-group-item');
for(i=0;i< dataBase.length;i++){
    console.log(i);
    consultationsHTML.innerHTML = `
    <p class="font-weight-bold"> Id : <span class="font-weight-normal"> ${JSON.stringify(dataBase[i]["id"], '\t' , 2)}</span></p>
    <p class="font-weight-bold"> Patient Name : <span class="font-weight-normal"> ${JSON.stringify(dataBase[i]["patientName"], '\t' , 2)}</span></p>
    <p class="font-weight-bold"> Contact : <span class="font-weight-normal"> ${JSON.stringify(dataBase[i]["contact"], '\t' , 2)}</span></p>
    <p class="font-weight-bold"> Date : <span class="font-weight-normal"> ${JSON.stringify(dataBase[i]["date"], '\t' , 2)}</span></p>
    <p class="font-weight-bold"> Time : <span class="font-weight-normal"> ${JSON.stringify(dataBase[i]["time"], '\t' , 2)}</span></p>
    <p class="font-weight-bold"> symptoms : <span class="font-weight-normal"> ${JSON.stringify(dataBase[i]["symptoms"], '\t' , 2)}</span></p>`;
            
}
        

consultations.appendChild(consultationsHTML);



submit.addEventListener('click',(e)=>{    
    e.preventDefault();

    if(patientName.value === "" || contact.value === "" || date.value === '' || time.value === '' || symptoms.value === ''){
        alert('please enter all fields');        
    }else
    {
        if(date.value < minDay && time.value < minTime){
            alert("Please enter Correct Time");
        }else
        {          
        
   
                let today = new Date();
                id = (today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate() + '' + today.getHours() + '' + today.getMinutes() + '' + today.getSeconds());
                console.log(id, date.value,time.value);

            

                for(i=0;i< dataBase.length;i++){
                    console.log( JSON.stringify(dataBase[i]["date"]) , JSON.stringify(dataBase[i]["time"]));
                        console.log(String(date.value) , String(time.value));
                        console.log(typeof(date.value) , typeof(time.value));

                        console.log(i)

                    if(String(date.value) == JSON.stringify(dataBase[i]['date']) && String(time.value) == JSON.stringify(dataBase[i]['time'])){
                        
                        alert("please Select Another Date and Time... This Is not available");
                        
                    }else{
                        flag = 1;
                    }                
                            
                }

                if(flag === 1){

                
                

                let newPatient = {
                    id: id,
                    patientName:        patientName.value,
                    contact:         contact.value,
                    date:     date.value,
                    time:     time.value,
                    symptoms: symptoms.value
                };
                
                DB.push(newPatient);
                localStorage.setItem("consultations", JSON.stringify(DB));
                
                console.log(DB);            
                form.reset();       
                let consultationsHTML = document.createElement('li');
                
                consultationsHTML.classList.add('list-group-item');
                for(i=0;i< DB.length;i++){
                    consultationsHTML.innerHTML = `
                    <p class="font-weight-bold"> Id : <span class="font-weight-normal"> ${JSON.stringify(DB[i]["id"], '\t' , 2)}</span></p>
                    <p class="font-weight-bold"> Patient Name : <span class="font-weight-normal"> ${JSON.stringify(DB[i]["patientName"], '\t' , 2)}</span></p>
                    <p class="font-weight-bold"> Contact : <span class="font-weight-normal"> ${JSON.stringify(DB[i]["contact"], '\t' , 2)}</span></p>
                    <p class="font-weight-bold"> Date : <span class="font-weight-normal"> ${JSON.stringify(DB[i]["date"], '\t' , 2)}</span></p>
                    <p class="font-weight-bold"> Time : <span class="font-weight-normal"> ${JSON.stringify(DB[i]["time"], '\t' , 2)}</span></p>
                    <p class="font-weight-bold"> symptoms : <span class="font-weight-normal"> ${JSON.stringify(DB[i]["symptoms"], '\t' , 2)}</span></p>`;                
                }
                
                consultations.appendChild(consultationsHTML);
            }
        }
    }
})









