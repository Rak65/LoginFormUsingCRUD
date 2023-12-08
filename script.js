//CRUD
let row = null;
function Submit(){
    let dataEntered = retrieveData();
    let readData = readingDataFromLocalStorage(dataEntered);
    if(dataEntered == false){
        msg.innerHTML = "Please enter datails"
    }else{
        if(row==null){
            insert(readData);
            msg.innerHTML = "Data Inserted";
        }
        else{
            update();
            msg.innerHTML = "Data Updated";
        }
    }
    document.getElementById("register").reset();
}
// create
// Ratrieving data from Login form
function retrieveData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobileNo = document.getElementById("MobileNo").value;

    let arr = [name,email,mobileNo];
    if(arr.includes("")){
        return false;
    }else{
        return arr;
    }
}

// Read
// Data in localStorage
function readingDataFromLocalStorage(dataEntered){
    //Storing data in localStorage
    let name =localStorage.setItem("Name", dataEntered[0]);
    let email = localStorage.setItem("Email",dataEntered[1]);
    let mobileNo = localStorage.setItem("MobileNo",dataEntered[2]);

    // getting values from local to table
    let name1 =localStorage.getItem("Name", name);
    let email1 = localStorage.getItem("Email", email);
    let mobileNo1 = localStorage.getItem("MobileNo", mobileNo);

    let arr = [name1, email1, mobileNo1];
    return arr;
}
//INSERT
function insert(readData){
    let row= table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onclick =edit(this)>Edit</button>
                                    <button onclick = remove(this)>Remove</button>`
}
//EDIT
function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("name").value =row.cells[0].innerHTML;
    document.getElementById("email").value =row.cells[1].innerHTML;
    document.getElementById("MobileNo").value =row.cells[2].innerHTML;
}
//UPDATE
function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("email").value;
    row.cells[2].innerHTML = document.getElementById("MobileNo").value;
    row = null;
}
//DELETE
function remove(td){
    let ans = confirm("Are you sure you want to delete this ?");
    if(ans == true){
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    }
}