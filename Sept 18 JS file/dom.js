let container = document.getElementById('wrapper')
let table_template = document.createElement('table')
let table_title = "student time table"
table_template.setAttribute('border', '1')
table_template.setAttribute('cellspacing', '0')

table_template.innerHTML = '<caption id='cap'>${table_title}</caption>
                            <thead>
                                <tr>
                                    <th>days/time</th>
                                    <th>2.00</th>
                                    <th>3.00</th>
                                    <th>4.00</th>
                                    <th>5.00</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Mon</th>
                                    <td>web_dev_adv</td>
                                    <td>UI & ux</td>
                                    <td>break</td>
                                    <td>data science</td>
                                </tr>
                            </tbody>'
containaer.innerHTML = table_template
container.appendChild(table_template)
console.log(table_template)
let caption = document.getElementById('cap')
caption.style.backgroundColor = 'red';

function imageGenerator(){
    let img = document.createElement('img');
    img.scr = "sample.jpg"
    img.setAttribute('width', "20%")
    img.setAttribute('height', '100vh')
    img.style.width = '20%'
    let imgCont = document.getElementById('imgCont')
    imgCont.classList.add('section')
    imgCont.appendChild(img)
}