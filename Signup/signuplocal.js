try{
    let register = document.getElementById('reg')
register.addEventListener('click', function(e){
    e.preventDefault()
    let dataStore = []
    let username = document.getElementById('username').value.trim()  
    let fname = document.getElementById('fname').value.trim()
    let lname = document.getElementById('lname').value.trim()
    let pwd = document.getElementById('pwd').value.trim()
    // select the info id from your static docs
    let msg = document.getElementById('info')
    let err_msg = document.createElement('span')
    console.log(msg)
    // check through the length of input
    let usernameLength = username.length
    let fnameLength = fname.length
    let lnameLength = lname.length
    let pwdLength = pwd.length
    if(usernameLength == 0 || fnameLength == 0 || lnameLength == 0 || pwdLength == 0){
        err_msg.textContent = 'name is required'
        err_msg.classList.add('bg-dynamic')
        // err_msg.setAttribute('class', 'bg-dynamic')
        // err_msg.style.backgroundColor = 'red'
        // err_msg.style.color = 'white'
        msg.appendChild(err_msg)
        // alert('name space is required')
    }else{
        // 'proccess the user input'
        /**
         * check if the storage is empty
         * tell the user that the name is not registered
         */
        let userData = JSON.parse(localStorage.getItem('userData'))
        if(userData == null || userData == undefined){
            // no users in storage
            /**
             * since no user then store the first user
             */
            dataStore.push({fname, lname, username, pwd})
            // store the user data
            localStorage.setItem('userData', JSON.stringify(dataStore))
            location.href = "login.html"
            // console.log(dataStore)
        }else{
            // dataStore.push({fname, lname, username, pwd})
            userData.push({fname, lname, username, pwd})
            // console.log(userData)
            localStorage.setItem('userData', JSON.stringify(userData))
            location.href = "login.html"
            // there is user
            /**
             * store other users
             */
            // alert('user exists')
        }
    }
})
}catch(error){
    console.log(error.msg)
}
// alert('hello')
// script for login
// let sam = 'welcome'
let log_html = document.getElementById('wrapper')

let log_template = document.createElement('form')
log_template.setAttribute('method', 'GET')
log_template.setAttribute('action', 'javascript:void()')
console.log(log_template)
log_template.innerHTML = `
                          <div id="formContent">
                              <div class="username">
                                   <input type="text" placeholder="enter your username" title="please provide the name you use when registering" id="username">
                              </div>
                              <div class="password">
                                   <input type="password" placeholder="enter your password" id="pwd">
                              </div>
                              <div class="controls">
                                   <input type="submit" value="login" id="login">
                              </div>
                          </div>`
log_html.appendChild(log_template)
// console.log(log_html)
let login = document.getElementById('login')
login.setAttribute('onclick', "getUser()")
function getUser(){
    let username = document.getElementById("username").value.trim()
    let password = document.getElementById("pwd").value.trim()
    if(username.length==0 || password.length == 0){
        alert("no user enterd")
    }else{
        let regUser = JSON.parse(localStorage.getItem('userData'))
        for(let i=0; i<regUser.length; i++){
            
        }
    }
}