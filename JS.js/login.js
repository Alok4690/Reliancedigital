document.querySelector(".continue").addEventListener("click",myFun);

function myFun(){
    event.preventDefault()
    var email= document.querySelector("#input").value ;
    if(email=="abc@gmail.com"){
        console.log("some one")
        window.location.href="index.html"
        document.querySelector("#log").innerText="Hi ALOK"

    }
    
}