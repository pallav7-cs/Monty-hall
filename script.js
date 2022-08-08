//hiding the unnecessary elements
var user_choice=document.querySelector('.user_choice');
user_choice.hidden=true;
//generating random number to decide door of car;
var car_pos = Math.floor((Math.random()*999)/333);
//adding event listeners to the doors
for(let x=0;x<3;x++)
{
    document.querySelectorAll('img')[x].addEventListener('click',function(e){
        user_choice.hidden=false;
         for(let i=0;i<3;i++)
         {
            if(i!=x&&i!=car_pos)
            {
                var cust_choice=x;
                var not_choice=i;
                document.querySelector(`.i${i}`).setAttribute('src','Images/goat.png');
                break;
                
            }
         }
    })
}

document.querySelector('#change-choice').addEventListener('click',function(e){
    for(let i=0;i<3;i++)
    {
        if(i!=cust_choice&&i!=not_choice)
        {
            cust_choice=i;
            break;
        }
    }
})

