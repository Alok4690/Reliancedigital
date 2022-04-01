var completed1=JSON.parse(localStorage.getItem("completedItem1")) ||[]
    var total= completed1.reduce(function(acc,elem){
            return acc+Number(elem.price)
        },0);
        document.querySelector("#total1").innerText="Total Price is"+" "+"="+" " +total
        document.querySelector("#sortPrice").addEventListener("change",handlePrice)
        displayData(completed1)
        function handlePrice(){
            console.log("name by")
            var selected= document.querySelector("#sortPrice").value ;
            if(selected=="hTol"){
                completed1.sort(function(a,b){
                    if(a.price>b.price) return -1
                    if(a.price<b.price) return 1
                    return 0
                })
                displayData(completed1)
            }
            if(selected=="lToh"){
                completed1.sort(function(a,b){
                    if(a.price>b.price) return 1
                    if(a.price<b.price) return -1
                    return 0
                })
              displayData(completed1)
            }  
        }
      function displayData(completedItem1){
          document.querySelector("#cardItem").innerText=" "
        completed1.map(function(elem){
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

        div.append(img,name,price,strikedoffprice,save)
        document.querySelector("#cardItem").append(div)
    })

      }