// getting the inputs from the HTML
let pets=[];
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

// constructor
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service
}
//register function
function register(){
    // create the obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    //check validation
    if(isValid(newPet)){
        //push the obj into array
        pets.push(newPet);
        console.log(pets);
        //clearing the inputs (erasing the contents)
        //display the obj in the html
        clearInputs();
        displayPet();
    }
}

//validating form
function isValid(pet){
    let validation = true; //boolean result

    if(pet.name == ""){
        validation = false;
        // alert("The name of the pet can't be empty!")
        inputName.classList.add("error");
    }

    if(pet.age == ""){
        validation = false;
        // alert("The age of the pet can't be empty!")
        inputAge.classList.add("error")
    }
    
    if(pet.breed == ""){
        validation = false;
        // alert("The age of the pet can't be empty!")
        inputBreed.classList.add("error")
    }

    return validation;
}

function deletePet(petId){
    console.log("Deleting pet with id: " + petId);
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    displayPet();
    displayInfo();
}

function clearInputs(){
    inputName.value = "";
    inputName.classList.remove("error");
    inputAge.value = "";
    inputAge.classList.remove("error");
    inputGender.value = "";
    inputBreed.value = "";
    inputBreed.classList.remove("error");
    inputService.value = "";
}

//init function
function init(){
    // create three obj
    let pet1 = new Pet("Scooby",99,"Male","Dane","Grooming");
    let pet2 = new Pet("Scrappy",89,"Male","Mixed","Vaccines");
    let pet3 = new Pet("Speedy",99,"Male","Mixed","Grooming");

    // push the obj to the array
    pets.push(pet1,pet2,pet3);

    console.log(pets);
    displayPet();
}

window.onload=init;// wait to render the HTML