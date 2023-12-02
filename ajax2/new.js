let static_html = document.getElementById('wrapper')
let xhr = new XMLHttpRequest()
xhr.open('GET', 'http://universities.hipolabs.com/search?country=United+States')

xhr.onload = function(){
    if(xhr.status==200 || xhr.readyState==400){
        let feedbacks = JSON.parse(xhr.responseText)
        // console.log(feedbacks)
        let dynamic_html = document.createElement('table')
        console.log(dynamic_html)
        dynamic_html.setAttribute('border', '1')
        dynamic_html.innerHTML = `<thead>
                                 <caption>University List</caption>
                                 <tr>
                                    <th>SN</th>
                                    <th>alpha_two_code</th>
                                    <th>country</th>
                                    <th>domains</th>
                                    <th>name</th>
                                    <th>state-province</th>
                                    <th>web_page</th>
                                 </tr>
                              </thead>
                            <tbody>`
        // console.log(feedbacks.length)
        for(let feedback=0; feedback<=300; feedback++){
          console.log(feedbacks)
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

       console.log(dynamic_html)
       static_html.appendChild(dynamic_html)
    }
}

xhr.send()