document.querySelector(".butt").addEventListener("click",buttonFun)
function buttonFun(){
    // console.log("some")
    var otp= document.querySelector("#num").value ;
    if(otp==1234){
        alert("Payment is successful")
        window.location.href="success.html"
    }
    else{
        alert("Wrong OTP")
    }
}