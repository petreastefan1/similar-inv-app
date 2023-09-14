
const invContainer = document.querySelector(".invitees-container");
const submitBtn = document.querySelector(".add-btn");
const nameInpt = document.getElementById("name-inpt");

function createCard(name){
    let cardContainer = document.createElement("div")
    cardContainer.className ="card-container"

    let invitee = document.createElement("p")
    invitee.textContent = name
    invitee.style.margin="0px"
    invitee.style.fontFamily="Roboto"
    invitee.style.fontSize="20px"
    cardContainer.append(invitee)

    let checkBoxContainer = document.createElement("div")
    checkBoxContainer.className="checkbox-label-container"

    let confirmedCheckBox = document.createElement("input");
    confirmedCheckBox.type = "checkbox"
    confirmedCheckBox.id = "confirmed-checkbox"
    let checkBoxLabel= document.createElement("label")
    checkBoxLabel.textContent="Confirmed"
    checkBoxLabel.setAttribute("for","confirmed-checkbox")

    checkBoxContainer.append(confirmedCheckBox);
    checkBoxContainer.append(checkBoxLabel);   
    cardContainer.append(checkBoxContainer);


    btnContainer = document.createElement("div")
    btnContainer.className="card-buttons"
    editBtn = document.createElement("button");
    editBtn.textContent = "Edit"
    editBtn.className= "button-style"
    removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove"
    removeBtn.className= "button-style"
    btnContainer.append(editBtn);
    btnContainer.append(removeBtn);
    cardContainer.append(btnContainer)

    return cardContainer
}


submitBtn.addEventListener("click",()=>{

    let newInvitee = createCard(nameInpt.value);
    invContainer.append(newInvitee)

})

