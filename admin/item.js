let addto = {myitems:[
{units:'Unit'},{units:'Bottle'},{units:'Box'},{units:'Ream'},{units:'Kilo Gram'},
]}

let mydata ="";

let selunits =document.getElementById("selunits");
addto.myitems.forEach(function(item){
mydata += `<option value="${item.units}"> ${item.units}</option>`
})

selunits.innerHTML = mydata;
// saveitems();

let myitems = {items:[{itemNmae:"Bond paper",
Description:"A4",
unit:"Ream",
orderpoint:5}]}

myitems = JSON.parse(localStorage.getItem("myitem"));
function saveitems(){
let txtitem = document.getElementById('txtitem').value;
let txtdescription = document.getElementById('txtdescription').value;
let selunits = document.getElementById('selunits').value;
let txtreorderpoint = document.getElementById('txtreorderpoint').value;

myitems.items.push({itemNmae:txtitem
,Description:txtdescription,
unit:selunits,
orderpoint:txtreorderpoint
});
load();

localStorage.setItem("myitem", JSON.stringify(myitems));
//console.log(data);

}
load();
function load(){

let tblitem = document.getElementById('tblitem');
let newtr = "";

// console.log(myarr);
myitems.items.forEach(function(item){
newtr += `<tr>
  <td>${item.itemNmae}</td>
  <td>${item.Description}</td>
  <td>${item.unit}</td>
  <td>${item.orderpoint}</td>
  <td>
    <span class="btn btn-danger">Delete</span></td>
</tr>`;
});

tblitem.innerHTML = newtr;
}
load2();
function load2(){

let tblitem = document.getElementById('tblitem2');
let newtr = "";

// console.log(myarr);
myitems.items.forEach(function(item){
newtr += `<tr class="trrow" id="${item.itemNmae} | ${item.Description}  ">
  <td>${item.itemNmae}</td>
  <td>${item.Description}</td>
  <td>${item.unit}</td>
  <td>${item.orderpoint}</td>

</tr>`;
});

tblitem.innerHTML = newtr;
}

let itemrec = {items:[]};

function saveitemReceive(){
let txtItemname = document.getElementById('txtItemname');
let txtDescription = document.getElementById('txtDescription');
let txtQuantity = document.getElementById('txtQuantity');
if(txtItemname.value === ""){
 alert("Item Name is Required!");
}else if(txtQuantity.value === ""){
  alert("Quantity is Required!");
}else{
      itemrec.items.push({itemname:txtItemname.value,
      description:txtDescription.value,
      quantity:txtQuantity.value
    });
    loaditems();
    txtItemname.textContent = "";
    txtDescription.textContent ="";
  txtQuantity.textContent = "";
}
}

function loaditems(){
  var details = "";
  let tblitems = document.getElementById("tblitems");
  itemrec.items.forEach(function(item,index){
    details += `<tr>
                <td>${item.itemname}</td>
                <td>${item.description}</td>
                <td>${item.quantity}</td> 
                <td><button class="btn btn-danger" onclick="deleteitem('${index}');">Remove</button></td> 
            </tr>`;
  })

  tblitems.innerHTML = details;
}


function deleteitem(index){
  itemrec.items.splice( index, 1);
  loaditems();
}
