function required(){
    
    var empt = document.form1.text1.value;
    if (empt === ""){
        alert("Please input a Value");
        return false;
    }
    else {
    
        alert('Sign up successfully ');
        window.location.href="index.html"
        return true; 
    }
}