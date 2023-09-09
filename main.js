const paths = document.querySelectorAll("svg path");
const nameDisplay = document.querySelector("#nameCountry")
const imgaeDisplay = document.querySelector("#imageDisplay");


class Country{
    constructor(name, lenguage, code, flag = ""){
        this.name = name
        this.lenguage = lenguage
        this.code = code;
        this.flag = flag
    }
}

paths.forEach((path, index) =>{
    const pathName = path.getAttribute("name");
    const Id = path.getAttribute("id");
    let name;
    if(pathName){
        name = pathName;
    }else{
        name = path.classList.value;
    }
    try{
        fetch(`https://restcountries.com/v3.1/alpha/${Id}`)
        .then((response => {return response.json()}))
        .then(data =>{
            const dataCountry = data[0]
            const country = new Country(name, dataCountry.languages , Id, dataCountry.flags.png);


            path.addEventListener("mouseover", (event)=>{
                nameDisplay.innerHTML = country.name
                imgaeDisplay.src = country.flag
            })
        }).catch(() =>{
            console.log("erro")
        }
        )        
    }catch{
        console.log("Não foi possivel fazer isso");
    }
    path.addEventListener("mouseout", (event)=>{
        nameDisplay.innerHTML = ""
        imgaeDisplay.src = ""
    })
})



