document.getElementById("submit-btn").addEventListener("click", function () {
  const email = document.getElementById("input-email");
  const password = document.getElementById("input-password");
  const emailText = email.value;
  const passText = password.value;

  if (emailText === "sontan@bap.com" && passText === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("YOUR ARE SUSPENDED...!");
  }
});
