function(){


}

function greenColor(){
    let colorRank = JSON.parse(localStorage.getItem('colorRank'));
    bgColor = {
        background: 'green'
    }
    if(colorRank == null || colorRank == undefined ){
        document.body.style.backgroundColor = 'blue'
    }

        alert('there is color')
        document.body.style.backgroundColor = bgColor['background']
        localStorage.setItem('colorRank', JSON.stringify(bgColor))
        document.body.style.backgroundColor = objColor['background']
}

let red = document.getElementById('red');
red.addEventListener('dblclick', function(){
    document.body.style.backgroundColor = 'red'
})