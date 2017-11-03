function submitOffers(){
  var dish=document.getElementsByName('dish')[0].value;
  var quantity=document.getElementsByName('quantity')[0].value;
  var origp=document.getElementsByName('origp')[0].value;
  var offp=document.getElementsByName('offp')[0].value;
  var acc=document.getElementsByName('acc');

  if(quantity<=0 | origp<=0 | offp<=0 | origp<offp){
    alert("Invalid Values");
    return;
  }

  var offer={"dish": dish, "quantity": quantity, "original_price": origp, "offer_price": offp};
  if(acc[0].value.length!=0){
    offer["accompaniment"]=[];
    for(var i=0; i<acc.length; i++)
      offer["accompaniment"].push(acc[i].value);
  }
  console.log(JSON.stringify(offer));
}
