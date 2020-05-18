const pass = document.querySelector('#pass')
const user = document.querySelector('#user')
const view = document.querySelector('#view')



check = () => {
 let passWord = pass.value;
 let userName = user.value;
// let a = userName.includes()
 if(userName.length < 8){
 alert('username cannot be lesser than 8 characters')
  }  if(passWord.length < 8){
   alert('password cannot be lesser than 8 characters')
  }else if(userName.search(/[0-9]/i) < 1){
   alert('username must contain a number')
  }else if(passWord.length = 1 && passWord.search(/[a-z]/i) < 0){
   alert('password must start with a letter')
  }else return true
    
 }
 

viewPass = () => {
 
 if (pass.type == 'password'){

  pass.type = 'text'
  view.className = 'fa fa-eye-slash'
 }else if (pass.type == 'text'){

  pass.type = 'password'
  view.className = 'fa fa-eye'
 }


}










