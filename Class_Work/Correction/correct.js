let container = $('#image')
let loader = $('#log')
loader.on('click', function(){
    $.ajax({
        method:"get",
        url: 'about.html',
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
})