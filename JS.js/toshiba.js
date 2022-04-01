var completed1=JSON.parse(localStorage.getItem("completedItem1")) ||[]
var toshibaProduct = [
{
 image_url:
   "https://www.reliancedigital.in/medias/Toshiba-43L5050-Televisions-491893299-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MTMzNHxpbWFnZS9qcGVnfGltYWdlcy9oZjUvaGY4LzkzNzQ0MjU0ODEyNDYuanBnfDNlNzcxZDIzNjI3MTBkMzYzNzRmNGRkNWNlNjljZTg1YjlkZmQ4OTYyOWYyODhjZDAxNTljNGUwYmE0NWE1M2M",
 name: "Toshiba 126cm (50 inch) 4K Ultra HD Video OS Smart LED",
 price: "33990.00",
 strikedoffprice: "MRF:69,990.00",
 save: "You Save 67%"
},
{
   image_url:
   "https://www.reliancedigital.in/medias/Toshiba-50U5050-Televisions-491893301-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0Mjg5NnxpbWFnZS9qcGVnfGltYWdlcy9oOGUvaDJmLzkzNzUzNjU2NjA3MDIuanBnfDM2NGZmMmEwNDBiOWRmMzk4ODM2Y2M5Mzk0NjkwNmU4OGY2ZWY5MTJhMGU1ZGNmNTY3ZWU0YmQ5MzllM2JiYmE",
 name: "Toshiba 108cm (43 inch) Full HD Video OS Smart LED TV",
 price: "25990.00",
 strikedoffprice: "MRF:69,990.00",
 save: "You Save 67%"
},
{
   image_url:
   "https://www.reliancedigital.in/medias/Toshiba-43U5050-Televisions-491893300-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0Mjg2OHxpbWFnZS9qcGVnfGltYWdlcy9oYTEvaDJlLzkzNzUzNjUzMzMwMjIuanBnfGYwNTA0ZThmNmRhMWI3YzdlZGQ4ZGY4ODA3NGQ0YTU5NmM5OGMyYjIxMTQ0MTFhOGQ4MGUxZDM1MmQ4ZTc3OWY",
 name: "Toshiba 139cm (55 inch) 4K Ultra HD Video OS Smart LED",
 price: "34990.00",
 strikedoffprice: "MRF:69,990.00",
 save: "You Save 67%"
},

];

toshibaProduct.map(function(elem){
   var div= document.createElement("div")
   div.setAttribute("class","div")
   var img= document.createElement("img")
   img.src=elem.image_url
   img.setAttribute("class","watchimg")
   var name= document.createElement("p")
   name.innerText=elem.name
   name.setAttribute("class","boat")
   var price= document.createElement("p")
   price.innerText=elem.price
   price.setAttribute("class","boat")
   var strikedoffprice=document.createElement("p")
   strikedoffprice.innerText=elem.strikedoffprice
   strikedoffprice.setAttribute("class","boat")
   var save= document.createElement("p")
   save.innerText=elem.save
   save.setAttribute("class","boat")
   var card= document.createElement("button")
   card.innerText="ADD TO CARD";
   card.addEventListener("click",function(){
          addToCard(elem)
   });

   div.append(img,name,price,strikedoffprice,save,card)
   document.querySelector("#container6").append(div)

})
function addToCard(elem){
   console.log("some one")
   completed1.push(elem)
   localStorage.setItem("completedItem1",JSON.stringify(completed1))

}