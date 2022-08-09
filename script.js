//hiding the unnecessary elements
var user_choice=document.querySelector('.user_choice');
user_choice.hidden=true;
document.querySelector('#status').hidden = true;
//generating random number to decide door of car;
var car_pos = Math.floor((Math.random()*999)/333);
//adding event listeners to the doors
var cust_choice=0;
var not_choice=0;
for(let x=0;x<3;x++)
{
    document.querySelectorAll('img')[x].addEventListener('click',function(e){
        document.querySelector('.sim_mode').hidden = true;
        document.querySelector(".row1").hidden = true;
        user_choice.hidden=false;
        console.log(this.className);
        var current = parseInt(this.className.substring(1));
        cust_choice=current;
        console.log(current);
         for(let i=0;i<3;i++)
         {
            if(i!=current && i!=car_pos)
            {
                 not_choice=i;
                document.querySelector(`.i${i}`).setAttribute('src','Images/goat.png');
                break;
                
            }
         }
    })
}

document.querySelector('#change-choice').addEventListener('click',function(e){
    user_choice.hidden = true;
    for(let i=0;i<3;i++)
    {
        if(i!=cust_choice&&i!=not_choice)
        {
            cust_choice=i;
            break;
        }
    }
    for(let i=0;i<3;i++)
    {
        if(i==not_choice)continue;
        else if(i==car_pos)
        {
            document.querySelector(`.i${i}`).setAttribute('src','Images/car.png');
        }
        else 
        {
            document.querySelector(`.i${i}`).setAttribute('src','Images/goat.png');
        }

    }
    if(cust_choice==car_pos)
    {
        document.querySelector('.results').innerHTML=` <div class="won">
        Congratulations!you won
    </div>`
    }
    else 
    {
        document.querySelector('.results').innerHTML=` <div class="lost">
        You lost
    </div>`
    }
    const link = document.createElement('div');
    link.setAttribute('class','links');
    link.innerHTML=`<button><a href="index.html">Play again</a></button>`
    document.querySelector('.results').appendChild(link);

})

document.querySelector('#stay-choice').addEventListener('click',function(e){
    user_choice.hidden = true;
    for(let i=0;i<3;i++)
    {
        if(i==not_choice)continue;
        else if(i==car_pos)
        {
            document.querySelector(`.i${i}`).setAttribute('src','Images/car.png');
        }
        else 
        {
            document.querySelector(`.i${i}`).setAttribute('src','Images/goat.png');
        }

    }
    if(cust_choice==car_pos)
    {
        document.querySelector('.results').innerHTML=` <div class="won">
        Congratulations!you won
    </div>`
    }
    else 
    {
        document.querySelector('.results').innerHTML=` <div class="lost">
        You lost.
    </div>`
    }
    const link2 = document.createElement('div');
    link2.setAttribute('class','links');
    link2.innerHTML=`<button><a href="index.html">Play again</a></button>`
    document.querySelector('.results').appendChild(link2);

})
var change = 0;
document.querySelector("#sim-change").addEventListener('click',function(){
    change = 1;
})
document.querySelector("#sim-stay").addEventListener('click',function(){
    change = 0;
})
for(let i=0;i<4;i++)
{
    document.querySelectorAll('.sim')[i].addEventListener('click', function()
    {

        document.querySelector('#status').hidden = false;
        document.querySelector('canvas').hidden = true;
        let wins =0;let losses = 0;
        let times = parseInt(this.getAttribute('id').substring(4));
        setTimeout(function(){
            
            if(change == 1){
            for(let j=1;j<=times;j++)
            {
                let in_choice = Math.floor(Math.random()*3);
                let correct = Math.floor(Math.random()*3);
                if(in_choice===correct)
                {
                    losses++;
                }
                else wins++;
                 
    
            }
        }
        else{
            for(let j=1;j<=times;j++)
            {
                let in_choice = Math.floor(Math.random()*3);
                let correct = Math.floor(Math.random()*3);
                if(in_choice===correct)
                {
                    wins++;
                }
                else losses++;
                 
    
            }
        }
        document.querySelector('#status').hidden = true;
        //visualising the result
        var xValues = ["Wins","Losses"];
        var yValues = [wins,losses];
        var colors = ["green","red"];
        Chart.defaults.scale.ticks.beginAtZero = true;
        new Chart("myChart", {
            type: "bar",
            data: {
              labels: xValues,
              datasets: [{
                backgroundColor: colors,
                data: yValues
              }]
            },

          });
          document.querySelector('canvas').hidden = false;


          wins = (wins/(wins+losses))*100;
          losses = 100-wins;
          document.querySelector('#scores').innerHTML=`
          <p>Win percentage : ${wins}%</p>
          <p>Loss percentage : ${losses}%</p>
          `
          
        },2000);
       
    })
}



