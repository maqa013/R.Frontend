let users = [
  {
      name:'u1',
     password:'p1',
    computers:[


      {
         id:1,
         mark:'Acer',
         memory:'1 TB',
         memoryType:'HDD',
         ram:'16GB',
         cpu:'intel core i7',
         price:'2045',
         describe:'intel core i7',
          gpu:'rtx 2070',
          img:'',
          new:'yes'
      }
 ]}
]

if(!JSON.parse(localStorage.getItem('users'))){
  localStorage.setItem('users',JSON.stringify(users))
}

$('.place').on('input',function(){

  if(
    $('#user').val().length >=2 &&
          $('#password').val().length >=1 
  ){
    $('.place').addClass('is-valid')
  }

  $('form').addClass('was-validated')
})






users = JSON.parse(localStorage.getItem('users'))



let input = document.querySelector('.place')


$('.btn1').click(function(event){
  event.preventDefault()


  event.preventDefault()
  if(
    $('#user').val().length >=2 &&
          $('#password').val().length >=2 
           
  ){
  $('.place').addClass('is-valid')
  }
  
  $('form').addClass('was-validated')
  event.preventDefault()

   





let userExist = users.some((user) => user.name === $('#user').val() )

if(userExist){

  localStorage.setItem('currentUser' , $('#user').val())
 $('.place').val('')
 location.href = './main.html'
 
}else{
  alert('Your password or name is incorrect')
}

})





$('#btn2').click(function(){
  location.href='./main.html'
})




$('.login').click(function(){
  location.href = './register.html'
})









