function CreateData(){
 fetch("https://crud-firebase-bf154-default-rtdb.asia-southeast1.firebasedatabase.app/crud-firebase.json",
    {method:"POST",body:JSON.stringify({
        name:"ankitha",
        rollno:2
    }
 )})  
 .then((res)=>res.json()) 
 .then((data)=>console.log("Data is added",data))
}
function GetData(){
    fetch("https://crud-firebase-bf154-default-rtdb.asia-southeast1.firebasedatabase.app/crud-firebase.json",
        {method:"GET"})
        .then((res)=>res.json())
.then((data)=>console.log("get the data",data))
}
function UpdateData(){

}
function DeleteData(){

}