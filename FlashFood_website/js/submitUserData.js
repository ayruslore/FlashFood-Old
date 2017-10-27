function submitUserData(){
  if(x==null){
    console.log("Chutiya bc!");
    alert("Please allow location access, try again!");
    document.getElementsByTagName("BODY")[0].style.display="none";
    return;
  }
  if(name.length==0 || phone.length!=10){
    console.log("Chutiya bc! (2)");
    alert("Please enter details!");
    return;
  }
  var name=document.getElementById('name').value;
  var phone=document.getElementById('phone').value;
  console.log("Name: "+name+"\nPhone: "+phone);
  console.log("Latitude: "+x+"\nLongitude: "+y);
  document.getElementsByTagName("BODY")[0].style.display="none";
  alert("Success! Close webview to proceed.");
}
