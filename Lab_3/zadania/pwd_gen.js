const gen_btn = document.getElementById("gen_btn");

gen_btn.addEventListener("click", (e) => {
  let max_length = parseInt(document.getElementById("max_length").value);
  let min_length = parseInt(document.getElementById("min_length").value);
  console.log(max_length, min_length);

  let special_marks = document.querySelector("#special_marks").checked;
  let great_letters = document.querySelector("#great_letters").checked;

  password = generate(min_length, max_length, special_marks, great_letters);
  alert(password + " length: " + password.length);
});

function generate(min_length, max_length, special_marks, great_letters) {
  let charset = "0123456789abcdefghijklmnopqrstuvwxyz";
  if (special_marks) {
    charset += "!@#$%^&*()";
  }
  if (great_letters) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  charset_length = charset.length;

  password_length =
    Math.floor(Math.random() * (max_length - min_length + 1)) + min_length;
  password = "";

  for (let i = 0; i < password_length; i++) {
    password += charset[Math.floor(Math.random() * charset_length)];
  }
  return password;
}
