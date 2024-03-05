// Function to send an email from a form
function emailSend() {

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name" + userName + "<br/> Phone " + phone + "<br/> Email " + email; 
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nathanshifflett38@gmail.com",
        Password : "41367640627D8B8811C316760A0AB2308646",
        To : 'nathanshifflett49@gmail.com',
        From : "nathanshifflett38@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => {
        if(message=='OK') {
            swal("Successful", "You clicked the button!", "success");
        }
        else {
            swal("Received an Error", "Please Try Again", "error");
        }
      }
    );
}