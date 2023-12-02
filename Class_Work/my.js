let container = $('#form')
let loader = $('#log')
loader.on('click', function (){
    $.ajax({
        method:"get",
        url: 'form.html',
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

