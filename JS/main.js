




window.addEventListener("load" , function(){


    $(".lodengScren").fadeOut(1500 , function(){

        $("body").css("overflow" , "auto")
    });
    

})




var btttn = document.getElementById("btttn");


window.onscroll= function()
{
if (window.scrollY >= 600){

    btttn.style.display = "block"
}
else{
    btttn.style.display = "none"
}
}












let tv = [];



// function getApis(time_window){

    let req = new XMLHttpRequest();

    req.open("get" , `https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    
    req.send();
    
    req.addEventListener("loadend" , function () {
    
        tv = JSON.parse(req.response).results
    
            if (req.readyState = 4 && req.status >=200 && req.status < 300) {
    
                console.log(tv);
    
                displayTv()
                
            }
            
        
    })

// }




    












    function displayTv() {

        let cartoona = "";

        for (let i = 0; i < tv.length ; i++) {
        
        
        
        cartoona += `<div class="col-lg-4 col-md-12 ">
    
    <div class="innar position-relative ">
    <div class="text position-absolute p-2 ">
        <h2 class="text-center ">${tv[i].title}</h2>
        <p>${tv[i].overview}</p>
        <h6>Lorem, ipsum dolor.</h6>

        <div class="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <div class="avrage border border-success pt-2">
            <h3>${tv[i].vote_average}</h3>
        </div>
        </div>
        <div class="innar-1 ">
            <img class="w-100 h-100 rounded" src="`+"https://image.tmdb.org/t/p/original"+`${tv[i].backdrop_path}" alt="">
        </div>
        </div>
    </div>`
    
    }

        document.querySelector(".row").innerHTML = cartoona;
        
    
}













let topRated = [];



function toprat(){

    let req1 = new XMLHttpRequest();

    req1.open("get" , `https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    
    req1.send();
    
    req1.addEventListener("loadend" , function () {
    
        topRated = JSON.parse(req1.response).results
    
            if (req1.readyState = 4 && req1.status >=200 && req1.status < 300) {
    
                console.log(topRated);
    
                
                displaytop()
            }
            
        
    })

}





function displaytop() {

    let cartoona1 = "";

    for (let i = 0; i < tv.length ; i++) {
    
    
    
    cartoona1 += `<div class="col-lg-4 col-md-12 ">

<div class="innar position-relative ">
<div class="text position-absolute p-2 ">
    <h2 class="text-center ">${topRated[i].title}</h2>
    <p>${topRated[i].overview}</p>
    <h6>Lorem, ipsum dolor.</h6>

    <div class="start">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
    </div>
    <div class="avrage border border-success pt-2">
        <h3>${topRated[i].vote_average}</h3>
    </div>
    </div>
    <div class="innar-1 ">
        <img class="w-100 h-100 rounded" src="`+"https://image.tmdb.org/t/p/original"+`${topRated[i].backdrop_path}" alt="">
    </div>
    </div>
</div>`

}

    document.querySelector(".row").innerHTML = cartoona1;
    

}












let NuoPlaung = [];



function nuopl(){

    let req2 = new XMLHttpRequest();

    req2.open("get" , `https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    
    req2.send();
    
    req2.addEventListener("loadend" , function () {
    
        NuoPlaung = JSON.parse(req2.response).results
    
            if (req2.readyState = 4 && req2.status >=200 && req2.status < 300) {
    
                console.log(NuoPlaung);
    
                
                displayplauing()
            }
            
        
    })

}






function displayplauing() {

    let cartoona2 = "";

    for (let i = 0; i < tv.length ; i++) {
    
    
    
    cartoona2 += `<div class="col-lg-4 col-md-12 ">

<div class="innar position-relative ">
<div class="text position-absolute p-2 ">
    <h2 class="text-center ">${NuoPlaung[i].title}</h2>
    <p>${NuoPlaung[i].overview}</p>
    <h6>Lorem, ipsum dolor.</h6>

    <div class="start">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
    </div>
    <div class="avrage border border-success pt-2">
        <h3>${NuoPlaung[i].vote_average}</h3>
    </div>
    </div>
    <div class="innar-1 ">
        <img class="w-100 h-100 rounded" src="`+"https://image.tmdb.org/t/p/original"+`${NuoPlaung[i].backdrop_path}" alt="">
    </div>
    </div>
</div>`

}

    document.querySelector(".row").innerHTML = cartoona2;
    

}










let Popular = [];


function popul() {

    let req4 = new XMLHttpRequest();

    req4.open("get" , `https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    
    req4.send();
    
    req4.addEventListener("loadend" , function () {
    
        Popular = JSON.parse(req4.response).results
    
            if (req4.readyState = 4 && req4.status >=200 && req4.status < 300) {
    
                console.log(Popular);
    
                displaypopul()
                
            }
            
        
    })
    
   }






    
    function displaypopul() {

        let cartoona4 = "";

        for (let i = 0; i < Popular.length ; i++) {
        
        
        
        cartoona4 += `<div class="col-lg-4 col-md-12 ">
    
    <div class="innar position-relative ">
    <div class="text position-absolute p-2 ">
        <h2 class="text-center ">${Popular[i].title}</h2>
        <p>${Popular[i].overview}</p>
        <h6>Lorem, ipsum dolor.</h6>

        <div class="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <div class="avrage border border-success pt-2">
            <h3>${Popular[i].vote_average}</h3>
        </div>
        </div>
        <div class="innar-1 ">
            <img class="w-100 h-100 rounded" src="`+"https://image.tmdb.org/t/p/original"+`${Popular[i].backdrop_path}" alt="">
        </div>
        </div>
    </div>`
    
    }

        document.querySelector(".row").innerHTML = cartoona4;
        
    
}










let Upcoming = [];


function Upcomi() {

    let req5 = new XMLHttpRequest();

    req5.open("get" , `https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    
    req5.send();
    
    req5.addEventListener("loadend" , function () {
    
        Upcoming = JSON.parse(req5.response).results
    
            if (req5.readyState = 4 && req5.status >=200 && req5.status < 300) {
    
                console.log(Upcoming);
    
                displayUpco()
                
            }
            
        
    })
    
   }






    
    function displayUpco() {

        let cartoona5 = "";

        for (let i = 0; i < Upcoming.length ; i++) {
        
        
        
        cartoona5 += `<div class="col-lg-4 col-md-12 ">
    
    <div class="innar position-relative ">
    <div class="text position-absolute p-2 ">
        <h2 class="text-center ">${Upcoming[i].title}</h2>
        <p>${Upcoming[i].overview}</p>
        <h6>Lorem, ipsum dolor.</h6>

        <div class="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <div class="avrage border border-success pt-2">
            <h3>${Upcoming[i].vote_average}</h3>
        </div>
        </div>
        <div class="innar-1 ">
            <img class="w-100 h-100 rounded" src="`+"https://image.tmdb.org/t/p/original"+`${Upcoming[i].backdrop_path}" alt="">
        </div>
        </div>
    </div>`
    
    }

        document.querySelector(".row").innerHTML = cartoona5;
        
    
}












// document.querySelector("#searsh").addEventListener("keyup" , function(e){


//     getApis(e.target.value);


// })

















let aside = document.querySelector("aside");

let open = document.querySelector(".open");

let xmark = document.querySelector(".xmark")


open.addEventListener("click" , function () {

    open.style.display  = "none";

    xmark.style.display  = "block";

    // document.querySelector(".nav li .nav-link").style.transform = "translateY(0)"

    aside.style.transform = "translateX(0)"


    
})


xmark.addEventListener("click" , function () {

    xmark.style.display  = "none";

    open.style.display  = "block";


    aside.style.transform = "translateX(-80%)"
    
})












let userName = document.querySelector(".usName").value;

let userEmail= document.querySelector(".usEmail").value;

let userPhone = document.querySelector(".usPhone").value;

let userAge = document.querySelector(".usAge").value;

let userPassword = document.querySelector(".usPassword").value;

let rePassword = document.querySelector(".rePassword").value;



document.querySelector(".regstart").onsubmit = function(){



    let  nameReg =  /[a-z]{5,18}/ig;

    let valed = nameReg.test(userName);

    if(valed === false){
        document.querySelector(".usName").style.border = "1px solid red"
        return false
    }
    


    let EmailReg = /\w+@gmail.\w+/ig;
    let valed2 = EmailReg.test(userEmail);

    if(valed2 === false){
        document.querySelector(".usEmail").style.border = "1px solid red"
        return false
    }




    let PhoneReg = /(01)\d{9}/ig;
    let valed3 = PhoneReg.test(userPhone);

    if(valed3 === false){
        document.querySelector(".usPhone").style.border = "1px solid red"
        return false
    }



    
    let AgeReg = /\d{18,90}/ig;
    let valed4 = AgeReg.test(userAge);

    if(valed4 === false){
        document.querySelector(".usAge").style.border = "1px solid red"
        return false
    }
    



    // let PasswordReg = /[A-Z][1-9]\d{}/ig;
    // let valed5 = PasswordReg.test(userPassword);

    // if(valed5 === false){
    //     document.querySelector(".usPassword").style.border = "1px solid red"
    //     return false
    // }

    // keyup
    
    

}


// 


// \






//  const userNameValue = userName.value;

//  const userEmailValue = userEmail.value;

//  const userPhoneValue = userPhone.value;

//  const userAgeValue = userAge.value;

//  const userPasswordValue = userPassword.value;

//  const rePasswordValue = rePassword.value;




