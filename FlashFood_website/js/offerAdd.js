var i=1;

function addOfferFields(){
  var acc=document.getElementsByName('acc')[i-1].value;
  if(acc.length==0) return;
  i++;
  document.getElementById('offerPlus1').remove();
  var d1=document.getElementById('offerAddition');
  //<div class="row form-group">
  var d2=document.createElement("DIV");
  d2.className="row form-group";
  //<input type="text" class="col-sm-2" name="acc" placeholder="Accompaniment" required/>
  var i5=document.createElement('INPUT');
  i5.type="text";
  i5.name="acc";
  i5.placeholder="Accompaniment "+i;
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
