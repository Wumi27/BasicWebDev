let container = $('#wrapper')
let loader = $('#loader')
let feed = "welcome"
loader.on('click', function (){
    container.append(feed)
    container.css('backgroundColor', 'red')
    console.log(container)
})
$.ajax({
    method:"get",
    url: 'image.html',
    success: function(feedback){
        container.html(feedback)
        console.log(container)
    },
    beforesend(){
        alert('loading')
    },
    error(){
        alert('failed to load')
    }
})
