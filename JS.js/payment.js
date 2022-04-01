document.querySelector("#form").addEventListener("submit",myfunction)
    function myfunction(){
        event.preventDefault()
        var cardnumber=document.querySelector("#card").value ;
        var expiry= document.querySelector("#expiry").value ;
        var CVV= document.querySelector("#CVV").value;
        var name= document.querySelector("#name").value;
       
           
            window.location.href="paymentSuccess.html"
        }