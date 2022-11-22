function validate() {
   var verf = document.myform.fname.value;
   if (verf === "") {
      alert("please enter details.");
      return false;
   }
   else {
      alert("Booked successfully.")
   }
}



