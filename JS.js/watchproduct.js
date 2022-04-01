var completed=JSON.parse(localStorage.getItem("completedItem")) ||[]
     var watchProduct = [
    {
      image_url:
        "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574194-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MjAzNnxpbWFnZS9qcGVnfGltYWdlcy9oMmUvaGZmLzk3NTU3NzkyMDMxMDIuanBnfDQ3OGM5MjJhYzNkMjcwZTY1MWNmYzAxMTc5ODYwOThkY2UyZjc1NzVjZGRiYmMyMjIwYWI0YTcyOTA5OTBjZjg",
      name: "boAt Flash RTL 3.3cm (1.29inch) Smart watch with Customizable Watch Faces,Moon Red",
      price: "2299.00",
      strikedoffprice: "MRF:6990.00",
      save: "You Save 67%"
    },
    {
        image_url:
        "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MDAwN3xpbWFnZS9qcGVnfGltYWdlcy9oNDMvaDA3Lzk3NTU3Nzg1NDc3NDIuanBnfDQxZGE4MzYwMzI2NjZiZjJkYWQyM2VmOGNiZTc5OWE0YmU0NTM3ODk3ZjgwMGZlYmNjMThhMTRjZmM5NDMyN2Y",
      name: "boAt Flash RTL 3.3cm (1.29inch) Smart watch with Customizable Watch Faces,Lighting",
      price: "2299.00",
      strikedoffprice: "MRF:6990.00",
      save: "You Save 67%"
    },
    {
        image_url:
        "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574196-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MzkxOHxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDQ4Lzk3NTU3Nzg4NzU0MjIuanBnfDE3MDQ0Mjk3NzY5MGUzNWQzZTI5YzJiNTM4MmEzNzY3NzBmZTYxY2ZlZjJiZGQxNDVlYThmZDk4OWM2YTE4ZDE",
      name: "boAt Flash RTL 3.3cm (1.29inch) Smart watch with Customizable Watch Faces,Galaxy Blue",
      price: "2299.00",
      strikedoffprice: "MRF:6990.00",
      save: "You Save 67%"
    },
    
  ];

    watchProduct.map(function(elem){
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
        completed.push(elem)
        localStorage.setItem("completedItem",JSON.stringify(completed))

    }