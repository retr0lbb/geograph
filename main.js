const paths = document.querySelectorAll("svg path");
const nameDisplay = document.querySelector("#nameCountry")




const getAllContryes = () =>{
    fetch("https://restcountries.com/v3.1/all").then((response => response.json())).then(data=> console.log(data))
}
getAllContryes()

const pathNames ={}
paths.forEach((path, index) =>{
    console.log(path.id)
    const pathName = path.getAttribute("name")
    let name;
    if(pathName){
        name = pathName
    }else{
        name = path.classList.value
    }
    path.addEventListener("mouseenter", ()=>{
        nameDisplay.innerHTML = name
    })
})
