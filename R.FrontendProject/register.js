
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
            price:'2045',
            describe:'intel core i7',
             gpu:'rtx 2070',
             img:'',
             new:'yes'
         }
    ]}
 ]

 if(!localStorage.getItem('users')){
   localStorage.setItem('users',JSON.stringify(users))
 }



 $('.place').on('input',function(){

  if(
    $('#name').val().length >=2 &&
          $('#password').val().length >=1 &&
           $('#user').val().length >=2
  ){
    $('.place').addClass('is-valid')
  }

  $('form').addClass('was-validated')
})


let form = document.querySelector('form')



let input = document.querySelector('.place')


let phone = document.querySelector('#phone')




   $('.btn1').click(function(e){

      e.preventDefault();

      e.preventDefault()
if(
  $('#name').val().length >=2 &&
        $('#password').val().length >=1 &&
         $('#user').val().length >=2
){
$('.place').addClass('is-valid')
}

$('form').addClass('was-validated')
e.preventDefault()




       
    
        users = JSON.parse(localStorage.getItem('users'))
 
        let newUser ={
              name: $('#user').val(),
             password: $('#password').val(),
             phone:$('#phone').val(),
             computers:[]
           };
          let alreadyExist = users.some((user) => user.name === $('#user').val() && user.password === $('#password').val())
              if(alreadyExist){
              alert('This is user already registered!')
             $('#user').css({
                  'outline-color':'red',
                  'border-color':'red'
            })
          }else{
            alert('You succesfuly register')
      users.push(newUser);
       localStorage.setItem('users', JSON.stringify(users))
          
           }
       })

    $('#btn2').click(function(){
        location.href='./main.html'
   })
     $('#btn3').click(function(){
        location.href='./login.html'
     })