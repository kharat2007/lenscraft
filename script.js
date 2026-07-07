document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("successMsg").innerText="✅ Thank you! Your booking request has been submitted.";

this.reset();

});