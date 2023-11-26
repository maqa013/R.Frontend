let users = JSON.parse(localStorage.getItem('users'))

const currentUser = localStorage.getItem('currentUser')

let computers = users.find(user => user.name === currentUser).computers

let edit = false


function updateSite(){
    $('tbody').html('')

    for(let comp of computers){
       $('tbody').html( $('tbody').html() + 
       `
        <tr>
        <td>${comp.id}</td>
        <td>${comp.mark}</td>
        <td><img src='${comp.img}' class='compImg'/></td>
        
        <td>${comp.price}</td>
        <td>
        <button id='${comp.id}D' class='btn btn-danger'>Delete</button>
        <button data-bs-toggle='modal' data-bs-target='#exampleModal' id='${comp.id}E' class='btn btn-primary' >Edit</button>
        </td>
        </tr>

        `)

    }
}

$('#img').on('input',function(){
$('#modalImg').attr('src',$(this).val())
})

updateSite()




















$('#save-todo').click(function(){


    if(!edit){
        let newComp = {
            id: Date.now(),
            mark: $('#mark').val(),
            img:$('#img').val(),
            price:$('#price').val(),
            new:$('#new').val(),
            describe:$('#describe').val(),
            
        }

        computers.push(newComp)
        $('#mark').val()
        $('#img').val()


        users.find(user => user.name  === currentUser).computers = computers
        localStorage.setItem('users', JSON.stringify(users))
        updateSite()
    }else{
      
        console.log( $('#mark').val())

        edit = false
        const index = computers.findIndex(comp => comp.id + 'E' === id )

        computers[index] = {
            id: computers[index].id,
            mark: $('#mark').val(),
            img:$('#img').val(),
            price:$('#price').val()
        }

        

        users.find(user => user.name === currentUser).computers = computers

        localStorage.setItem('users', JSON.stringify(users))
        updateSite()

    }
})

let id

$('table').click(function(e){
    if(e.target.innerHTML === 'Delete'){
        let a = confirm('Are you sure')
if(a){
    id = e.target.id
    computers = computers.filter(comp  =>  comp.id + 'D'  !== id)

    users.find(user => user.name === currentUser).computers = computers

    localStorage.setItem('users' , JSON.stringify(users))
    updateSite()
}
     } else if(e.target.innerHTML === 'Edit'){
        edit = true
        id = e.target.id

        const currentComp =  computers.find(comp =>  comp.id + 'E' === id)

        $('#mark').val(currentComp.mark)
        $('#img').val(currentComp.img)
    }
})




