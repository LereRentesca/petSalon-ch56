function displayPet(){
    let cardSection = document.getElementById("pets");
    let result = "";

    for (let i = 0; i < pets.length; i++) {
        // console.log(pets[i]);
        let pet = pets[i]
        result += `
            <div id=${i} class="card col-3 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${pet.name} - <span class="text-secondary">${pet.service}</span></h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}</h6>
                    <p class="card-text">${pet.gender}, ${pet.age} years.</p>
                    <button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button>
                </div>
            </div>
        `;
    }

    cardSection.innerHTML = result;
    displayInfo();
}

function displayInfo(){
    let groomingDiv = document.getElementById("gTotal");
    let totalDiv = document.getElementById("total");
    let grooming=0;

    totalDiv.innerHTML = pets.length;
    for (let i = 0; i < pets.length; i++) {
        if (pets[i].service == "Grooming") {
            grooming++;
        }
        groomingDiv.innerHTML=grooming;
    }
}