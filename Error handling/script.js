
function signup(){
    let username = document.getElementById('username').value.trim()
    let fname = document.getElementById('fname').value.trim()
    let lname = document.getElementById('lname').value.trim()
    let pwd = document.getElementById('pwd').value.trim()
    const pattern = /[a-z]{5}/i
    if(pattern.test(username)){
        alert('found a match')
    }else{
        alert('not a match')
        const pattern = /
    }
}


// let a = 2
// let b = 3
// let wrapper = document.querySelector('#wrapper')
// try{
//     let sum = a + c
//     console.log (sum)
// }catch(error){
//     wrapper.textContent = 'check your vatiables ' + error.message
// }
// finally{
//     let mult = a * b
//     console.log(mult)
// }