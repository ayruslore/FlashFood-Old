function submitUserData(){
  var name=document.getElementById('name').value;
  var phone=document.getElementById('phone').value;
  if(name.length==0 || phone.length!=10){
    console.log("Chutiya bc! (2)");
    alert("Please enter details!");
    return;
  }
  latlong();
  console.log("Name: "+name+"\nPhone: "+phone);
  console.log("Latitude: "+lat+"\nLongitude: "+long);
  document.getElementsByTagName("BODY")[0].style.display="none";
  alert("Success! Close webview to proceed.");
}
