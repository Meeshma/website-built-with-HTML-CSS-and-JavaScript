function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    if ((username === "ikku" && password === "emmanual") ||
        (username === "vava" && password === "anjusha") ||
        (username === "ivan" && password === "ivan")) {
        navigate('password_generator.html');
    } else {
        errorMessage.textContent = "Invalid login credentials. Please try again.";
    }
}

function navigate(page) {
    window.location.href = page;
}

function generatePassword() {
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("generatedPassword").textContent = password;
}

function addTask() {
    var taskList = document.getElementById("taskList");
    var newTask = document.getElementById("newTask").value;
    if (newTask) {
        var li = document.createElement("li");
        li.textContent = newTask;
        taskList.appendChild(li);
        document.getElementById("newTask").value = "";
    }
}

function previewImage() {
    var file = document.getElementById("profileImage").files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        var img = document.getElementById("imagePreview");
        img.src = reader.result;
        img.style.display = "block";
    }
    if (file) {
        reader.readAsDataURL(file);
    }
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}
