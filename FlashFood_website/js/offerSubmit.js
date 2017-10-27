function submitOffers(){
  var dish=document.getElementsByName('dish');
  var quantity=document.getElementsByName('quantity');
  var origp=document.getElementsByName('origp');
  var offp=document.getElementsByName('offp');
  var acc=document.getElementsByName('acc');
  for(var i=0; i<dish.length; i++){
    console.log(dish[i].value, quantity[i].value, origp[i].value, offp[i].value);
  }
}
