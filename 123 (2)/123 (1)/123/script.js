function generatePassword() {
    const length = document.getElementById('length').value;
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numberset ='0123456789';
    const symbolset ='!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('generated-password').value = password;
}

function savePassword(event) {
    event.preventDefault();
    const service = document.getElementById('service').value;
    const password = document.getElementById('password').value;
    const passwordList = document.getElementById('password-list');

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${service}: ${password}</span><br/>
    <button onclick="deletePassword(this)">Delete</button>`;

    passwordList.appendChild(listItem);

    document.getElementById('password-form').reset();
}
function myfunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
function deletePassword(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

