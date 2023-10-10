// config.js
const randomNum = Math.floor(Math.random() * 1000) + 1;

module.exports = {
    userNameFixed: "Niksa",
    emailFixed: "testniksa1+1@gmail.com",
    passwordFixed: "sifra123",
    userName: `your_common_userName_${randomNum}`,
    email: `your_common_baseEmail_${randomNum}@gmail.com`,
    password: `your_common_password_${randomNum}`,
};
