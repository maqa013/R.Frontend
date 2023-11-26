const currentUser = localStorage.getItem('currentUser')


if(currentUser){
    let prevText =   $('h1').text()
    $('h1').text(prevText + currentUser)
    $('#register').css('display', ' none')
    $('#comp').show()
    $('#logout').show()
}

$('#logout').click(function(){
    $('#register').show()
    $('#comp').css('display', ' none')
    $('#logout').css('display', ' none')
    $('h1').text('User:')
})



