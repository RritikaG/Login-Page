var users = [
     {
        name: "Rahul",
        email: "rahul1123@gmail.com",
        username: "Rahul0001",
        password: "Rahul",
        mobile: 9996660357
    },
    
 {
        name: "Ritika",
        email: "ritika56750@gmail.com",
        username: "Ritika0001",
        password: "Ritika",
        mobile: 9996660345  
    },
    
     {
        name: "Ria",
        email: "ria234@gmail.com",
        username: "user3",
        password: "Ria",
        mobile: 9466563079      
    },
    {
        name: "admin",
        email: "admin@def.com",
        username: "admin",
        password: "admin",
        mobile: 94665773079      
    }
];
document.getElementById("loginbtn").onclick=checkdetail;
function checklogin()
{
    if(localStorage.getItem("User")==null)

{

}
else{
    window.location.assign("bootstrap_assignment_final.html"); 
}
}

function checkdetail()
{
var Username= document.getElementById("input1").value;
var Password= document.getElementById("input2").value;
var checker=false;

for(var i=0;i<users.length;i++)
{
    if(users[i].name==Username && users[i].password==Password){
        checker=true;
        localStorage.setItem("User",Username);
        window.location.assign("profile.html");
         break;
          } 
    }
    if(!checker){
        document.getElementById("wrongpassword").innerHTML="password and username INVALID";
    }
}

function start()
{
    var Myname=localStorage.getItem("User");

for(var i=0;i<users.length;i++)
{
    if(users[i].name==Myname)
    {
document.getElementById("name1").innerHTML=Myname;
document.getElementById("mobile1").innerHTML=users[i].mobile;
document.getElementById("email1").innerHTML=users[i].email;
    }
}
}
function logoutpage()
{
    localStorage.clear("User");
    window.location.assign("index.html");
}


