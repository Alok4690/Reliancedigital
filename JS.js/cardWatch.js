var completed=JSON.parse(localStorage.getItem("completedItem")) ||[]
var total= completed.reduce(function(acc,elem){
        return acc+Number(elem.price)
    },0);
    document.querySelector("#total").innerText="Total Price is"+" "+"="+" " +total
    document.querySelector("#sortPrice").addEventListener("change",handlePrice)
    displayData(completed)
    function handlePrice(){
        console.log("name by")
        var selected= document.querySelector("#sortPrice").value ;
        if(selected=="hTol"){
            completed.sort(function(a,b){
                if(a.price>b.price) return -1
                if(a.price<b.price) return 1
                return 0
            })
            displayData(completed)
        }
        if(selected=="lToh"){
            completed.sort(function(a,b){
                if(a.price>b.price) return 1
                if(a.price<b.price) return -1
                return 0
            })
          displayData(completed)
        }  
    }
  function displayData(completed){
      document.querySelector("#cardItem").innerText=" "
    completed.map(function(elem){
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