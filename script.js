function test(){
    //Retrieving data
var F_Name =document.getElementByid("F_Name").value;
var L_Name= document.getElementByid("L_Name").value;
var Gender= document.getElementByid("Gender").value;
var P_Number=document.getElementByid("P_Number").value;
var Email=document.getElementById("Email").value;
var Arrival=document.getElementByid("D_Arrival").value;
var Number1=document.getElementByid("Number1").value;
var Number2=documnet.getElementByid("Number2").value;
var payment=document.getElementByid("payment").value;

alert(F_Name + L_Name);

//storing data
var F_Name=localStorage.setItem("F_Name", F_Name);
var L_Name=localStorage.setItem("L_Name", L_Name);
var Gender=localStorage.setItem("Gender", Gender);
var P_Number=localStorage.setItem("P_Number", P_Number);
var Email=localStorage.setItem("Email", Email);
var Arrival=localStorage.setItem("D_Arrival", Arrival);
var Number1=localStorage.setItem("Number1", Number1);
var Number2=localStorage.setItem("Number2", Number2);
var payment=localStorage.setItem("payment", payment);

//retrieving stored date 
var F_Name=localStorage.getItem("F_Name", F_Name);
var L_Name=localStorage.getItem("L_Name", L_Name);
var Gender=localStorage.getItem("Gender", Gender);
var P_Number=localStorage.getItem("P_Number", P_Number);
var Email=localStorage.getItem("Email", Email);
var Arrival=localStorage.getItem("D_Arrival", Arrival);
var Number1=localStorage.getItem("Number1", Number1);
var Number2=localStorage.getItem("Number2", Number2);
var payment=localStorage.getItem("payment", payment);


}