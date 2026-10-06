let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = form.elements["First Name"].value;
    let lastName = form.elements["Last Name"].value;
    let phone = form.elements["Phone Number"].value;
    let email = form.elements["Email ID"].value;

    alert(
        "First Name: " + firstName +
        " Last Name: " + lastName +
        " Phone Number: " + phone +
        " Email ID: " + email
    );
});