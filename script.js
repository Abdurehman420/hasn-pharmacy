function sendEmail() {
  let params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_a7bl0ft", "template_fuirsv4", params).then(function (res) {
    alert("Message Sent Successfully! ");
  });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
