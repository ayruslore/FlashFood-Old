var i=0;

function addOfferFields(){
  var dish=document.getElementsByName('dish')[i].value;
  var quantity=document.getElementsByName('quantity')[i].value;
  var origp=document.getElementsByName('origp')[i].value;
  var offp=document.getElementsByName('offp')[i].value;
  var acc=document.getElementsByName('acc')[i].value;
  if(dish.length==0 | quantity.length==0 | origp.length==0 | offp.length==0) return;

  i++;
  document.getElementById('offerPlus1').remove();
  var d1=document.getElementById('offerAddition');
  //<div class="row form-group">
  var d2=document.createElement("DIV");
  d2.className="row form-group";
  //<input type="text" class="col-sm-2" name="dish" placeholder="Dish Name" required/>
  var i1=document.createElement('INPUT');
  i1.type="text";
  i1.className="col-sm-2";
  i1.name="dish";
  i1.placeholder="Dish Name";
  d2.appendChild(i1);
  //<input type="number" class="col-sm-2" name="quantity" placeholder="Quantity" required/>
  var i2=document.createElement('INPUT');
  i2.type="number"
  i2.className="col-sm-2";
  i2.name="quantity";
  i2.placeholder="Quantity";
  d2.appendChild(i2);
  //<input type="number" class="col-sm-2" name="origp" placeholder="Original Price" required/>
  var i3=document.createElement('INPUT');
  i3.type="number"
  i3.className="col-sm-2";
  i3.name="origp";
  i3.placeholder="Original Price";
  d2.appendChild(i3);
  //<input type="number" class="col-sm-2" name="offp" placeholder="Offer Price" required/>
  var i4=document.createElement('INPUT');
  i4.type="number"
  i4.className="col-sm-2";
  i4.name="offp";
  i4.placeholder="Offer Price";
  d2.appendChild(i4);
  //<input type="text" class="col-sm-2" name="acc" placeholder="Accompaniment" required/>
  var i5=document.createElement('INPUT');
  i5.type="text";
  i5.className="col-sm-2";
  i5.name="acc";
  i5.placeholder="Accompaniment";
  d2.appendChild(i5);
  /*
  <button id="offerPlus1" onclick="addOfferFields()" class="btn btn-default" href="#">
    <i class="fa fa-plus-circle"></i> Add
  </button>
  */
  var b1=document.createElement('BUTTON');
  b1.id="offerPlus1";
  b1.onclick=function(){
    addOfferFields();
  }
  b1.className="btn btn-default";
  b1.href="#";
  var i6=document.createElement('I');
  i6.className="fa fa-plus-circle";
  b1.appendChild(i6);
  b1.innerHTML+=" Add";
  d2.appendChild(b1);

  d1.appendChild(d2);
}
