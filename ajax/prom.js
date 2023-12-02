let static_html = document.getElementById('wrapper')
let xhr = new XMLHttpRequest()
xhr.open('GET', 'http://universities.hipolabs.com/search?country=United+States')
xhr.onload = function(){
    let dynamic_html = document.createElement('table')
    dynamic_html.setAttribute('border', '1')
    dynamic_html.innerHTML = `<thead>
                                 <caption>University List</caption>
                                 <tr>
                                    <th>alpha_two_code</th>
                                    <th>country</th>
                                    <th>domains</th>
                                    <th>name</th>
                                    <th>state-province</th>
                                    <th>web_page</th>
                                 </tr>
                              </thead>
                            <tbody>`

                            if(xhr.status==200 || xhr.readystate==400){
                                 alert('ok')
                                let feedbacks = JSON.parse(xhr.responseText)
                                // console.log(feedbacks)
                                for(let feedback = 0; feedback<feedbacks.length; feedback++){
                        
                                    dynamic_html.innerHTML += `
                                    <tr>
                                    <td>${feedback}</td>
                                    <td>${feedbacks[feedback]['alpha_two_code']}</td>
                                    <td>${feedbacks[feedback]['country']}</td>
                                    <td>${feedbacks[feedback]['domains']}</td>
                                    <td>${feedbacks[feedback]['name']}</td>
                                   <td>${feedbacks[feedback]['state-province']}</td>
                                   <td>${feedbacks[feedback]['web_page']}</td>
                                 </tr>
                                  </tbody>`
                                }
                            }
                            console.log(dynamic_html)
}  
xhr.send()
   
// xhr.open('GET', 'http://universities.hipolabs.com/search?country=United+States')

// xhr.onload = function(){
    // let dynamic_html = document.createElement('table')
    // dynamic_html.setAttribute('border', '1')
    // dynamic_html.innerHTML = `<thead>
    //                              <caption>loading json data</caption>
    //                              <tr>
    //                                 <th>Sn</th>
    //                                 <th>Name</th>
    //                                 <th>Age</th>
    //                                 <th>Gender</th>
    //                                 <th>School</th>
    //                                 <th>Image</th>
    //                              </tr>
    //                           </thead>
    //                           <tbody>`
    // if(xhr.status==200 || xhr.readystate==400){
    //     // alert('ok')
    //     let feedbacks = JSON.parse(xhr.responseText)
    //     for(let feedback = 0; feedback < feedbacks.length; feedback++){
    //         dynamic_html.innerHTML += `
    //                                     <tr>
    //                                       <td>${feedback}</td>
    //                                       <td>${feedbacks[feedback]['name']}</td>
    //                                       <td>${feedbacks[feedback]['age']}</td>
    //                                       <td>${feedbacks[feedback]['gender']}</td>
    //                                       <td>${feedbacks[feedback]['school']}</td>
    //                                       <td>
    //                                          <img src="${feedbacks[feedback]['image']}" width="5%">
    //                                       </td>
    //                                     </tr>
    //                                     </tbody>`
    //     }
    //     static_html.appendChild(dynamic_html)
    //     console.log(dynamic_html)
        // console.log(feedbacks[feedback])
        // console.log(feedbacks)
        // console.log(`${feedback['name']} is ${feedback['age']} years old`)
        // console.log(feedback['name'] + ' is ' + feedback['age'] + ' year old')
//     }else{
//         // no data sent
//     }
   
// }
// xhr.send()