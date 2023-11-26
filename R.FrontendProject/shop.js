const users = JSON.parse(localStorage.getItem('users'))



let computers = []


for(let user of users){
   computers.push(...user.computers)
}

const allTabPanes = document.querySelectorAll('.tab-pane')


for(let tabPane of allTabPanes){
    for(let comp of computers){
        if(tabPane.id.toUpperCase() === comp.mark.toUpperCase()){
            tabPane.innerHTML += `<div id='block' style="width:250px; height:300px; background-color:white; margin-left:10px; margin-top:10px; border-radius:7px; display:flex; flex-direction:column;" >
          <div style="display:flex; justify-content:center;"> <img style="width:100px; height:90px;" src="${comp.img}"/></div> 
            <p  style="font-size:15px; margin-left:10px;">Name: ${comp.mark}</p>
            <p  style="font-size:15px; margin-left:10px;">Describing: ${comp.describe}</p>
            <p style="font-size:15px; margin-left:10px;">Price: ${comp.price} AZN</p>
            <p  style="font-size:15px; margin-left:10px;">New: ${comp.new}</p>
            <div style="display:flex; justify-content:center;">
            <button id="${comp.id}M" data-bs-toggle="modal" data-bs-target="#exampleModal" style="width:70px; " class='btn btn-primary'>More</button>
            </div>
            
            

            </div>`
        }
    }
}






        
        
let id

$('#v-pills-tabContent').click(function(e){
e.preventDefault()
 if(e.target.innerHTML === 'More'){
    
    id = e.target.id

        const currentComp =  computers.find(comp =>  comp.id + 'M' === id)
        console.log(currentComp)
$('#img13').attr('src',currentComp.img )
         $('#first1').html(currentComp.mark)
        $('#first2').html(currentComp.describe)
         $('#first3').html(currentComp.price)
         $('#first4').html(currentComp.new)
    }
    
})



        
        

$('.f')
         $("#find").on('input',function(){
            let name = $(this).val().toLowerCase()
            $('.f').filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(name) > -1)
               
            })
         })

         
