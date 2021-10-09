var listArr = new Array();

function startUp() {
    viewNote();
    contentVisibility();
}


function submitNote(){
    let userData = document.getElementById("textBox").value;
    let getLocalStorage = localStorage.getItem("New Notes"); //getting local storage
    if(getLocalStorage == null) {
        listArr = []; //creating blank array
    }
    else {
        listArr = JSON.parse(getLocalStorage);  //transforming json string into a js object
    }
    if(userData != ""){
        userData = userData;
        listArr.pop(); //remove
        listArr.push(userData); //Pushing userdata to local storage
        localStorage.setItem("New Notes", JSON.stringify(listArr).replaceAll("\\n", "</br>"));  //transforming js object into a json string
    }
    viewNote();
    Swal.fire('Successfully Saved!', '','success')

}

function newNote() {
    location.reload(); //reloading window
    viewNote();
    document.getElementById("textBox").value = null;
    let userData = document.getElementById("textBox").value;
    let getLocalStorage = localStorage.getItem("New Notes"); //getting local storage
    if(getLocalStorage == null) {
        listArr = []; //creating blank array
    }
    else {
        listArr = JSON.parse(getLocalStorage);  //transforming json string into a js object
    }
    listArr.push(userData); //Pushing userdata to local storage
    localStorage.setItem("New Notes", JSON.stringify(listArr).replace("\\n", "</br>"));  //transforming js object into a json string
}

function viewNoteClick() {
    window.scroll(0, 775);
    viewNote();
    Swal.fire('Caution!', 'Double Click: To Delete Your Note.','info');
}

function viewNote() {
    contentVisibility(); 
    let getLocalStorage = localStorage.getItem("New Notes"); //getting local storage
    if(getLocalStorage == null) {
        listArr = []; //creating blank array
    }
    else {
        listArr = JSON.parse(getLocalStorage);  //transforming json string into a js object
    }

    let newTag = "";
    listArr.forEach((element, index) => {
        if(element != ""){
            newTag += `<li type="none" ondblclick="deleteNote(${index})"><div id="element">${element} </div></li>`;
        }
    });
    if (newTag != "") {
        
    }
    document.getElementById("recentNotes").innerHTML = newTag;
}

function deleteNote(index) {
    let getLocalStorage = localStorage.getItem("New Notes"); 
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Notes", JSON.stringify(listArr));  //transforming js object into a json string
    viewNote();
    Swal.fire('Successfully Deleted!', '','success')
}

function contentVisibility() {
    let getLocalStorage = localStorage.getItem("New Notes"); //getting local storage
    if(getLocalStorage == "[]" || getLocalStorage == null) {
        document.getElementById("recentNotesDiv").style.display = "none";
    }
    else {
        document.getElementById("recentNotesDiv").style.display = "block";
    }
}
