async function getFact(){
    let statichtml = document.getElementById('content')
    console.log(statichtml)
    let dynamichtml = document.createElement('div')
    dynamichtml.setAttribute('class', 'row')

    await fetch('https://catfact.ninja/facts').then(data=>data.json()).then(data=>{
    dynamichtml,innerHTML = ``   
    let feedbacks = data['data']
    feedbacks.forEach(feedback => {
        dynamichtml.innerHTML += `<div class="col-4">
                                    <div class="card" style="width: 18rem;">
                                        <img src="..." class="card-img-top" alt="...">
                                       <div class="card-title">
                                           <h5 class="card-title">Cat Facts</h5>
                                           <p class="card-text">${feedback['fact']}</p>
                                           <span>${feedback['length']}</span>
                                           <a href="#" class="btn btn-primary">Go somewhere</a>
                                       </div>
                                    </div>
                                </div>`
            // console.log(feedback['fact'])
        })
        statichtml.appendChild(dynamichtml)
        // console.log(feedbacks)
    })
}
let homepage = document.getElementById('home');
homepage.addEventListener('click', function(){
    getFact();
})
async function getBreed(){
    let dynamichtml = document.createElement('table')
    dynamichtml.setAttribute('border', '1')
    let statichtml = document.getElementById('content')
    console.log(statichtml)
    await fetch('https://catfact.ninja/breeds').then(data=>data.json()).then(data=>{
    dynamichtml,innerHTML = ``   
    let feedbacks = data['data']
    console.log(feedbacks)
    feedbacks.forEach(feedback => {
        dynamichtml.innerHTML += `<table class="col-4">
                                    <caption>Cat Breeds</caption>
                                      <tr>
                                      <th>SN</th>
                                      <th>Breed</th>
                                      <th>Coat</th>
                                      <th>Country</th>
                                      <th>Origin</th>
                                      <th>Pattern</th>
                                      </tr>
                                </table>`   
        })
        statichtml.appendChild(dynamichtml)                            
    })
}
let breedpage = document.getElementById('breeds');
breedpage.addEventListener('click', function(){
    getBreed();
    // location.href="breeds.html"
})
