import '../css/style.scss'

const password = document.getElementById("password")
const email = document.getElementById('email')

const passwordToggle = document.querySelector('.password_icon')

// console.log(password,passwordToggle)
passwordToggle.addEventListener('click', () => {
  if (password.type === 'password') {
    password.setAttribute('type', 'text')
    passwordToggle.classList.remove('show')

  } else {
    password.setAttribute('type', 'password')
    passwordToggle.classList.add('show')
  }
})

password.addEventListener('keyup', () => {
  console.log(password.value);
  checkPassword(password.value)
})

email.addEventListener('keyup', () => {
  console.log(email.value);
  checkEmail(email.value)
})


function checkPassword(info) {

  const passwordMsg = document.querySelector('#password_msg')
  console.log(passwordMsg);
  passwordMsg.textContent = '需要'
  const lower = new RegExp('.*[a-z]')  // 小写
  const upper = new RegExp('(?=.*[A-Z])')  // 大写
  const number = new RegExp('(?=.*[0-9])') // 数字
  const special = new RegExp('(?=.*[!@#\$\^\*])') //特殊字符
  const length = new RegExp('(?=.{8,})')    //长度 


  let errorFlag = false;

  if (!lower.test(info)) {
    passwordMsg.textContent += " 小写"
    errorFlag = true
  }

  if (!upper.test(info)) {
    passwordMsg.textContent += " 大写"
    errorFlag = true
  }

  if (!number.test(info)) {
    passwordMsg.textContent += " 数字"
    errorFlag = true
  }

  if (!special.test(info)) {
    passwordMsg.textContent += " 特殊字符"
    errorFlag = true
  }

  if (!length.test(info)) {
    passwordMsg.textContent += " 长度大于8"
    errorFlag = true
  }

  const passwordGroup = document.getElementById("password_group")

  if (errorFlag) {
    passwordGroup.classList.remove('success')
    passwordGroup.classList.add('error')
  } else {
    passwordGroup.classList.remove('error')
    passwordGroup.classList.add('success')
    passwordMsg.textContent = ""
  }


}

function checkEmail(info) {
  console.log(info);
  const emailMsg = document.getElementById('email_msg')
  emailMsg.textContent = "";
  // const email = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+')
  const email = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$')

  // let errorFlag = false
  const input_group = document.getElementById('input_group')

  if (!email.test(info)) {
    console.log("---checking email---");


    emailMsg.textContent = "Invalid Email"
    input_group.classList.add('error')

    // errorFlag = true
  } else {
    console.log("---mail is valid---");
    emailMsg.textContent = ""
    input_group.classList.remove('error')
    input_group.classList.add('success')
  }

}