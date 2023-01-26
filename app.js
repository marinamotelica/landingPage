document.getElementById('popup').addEventListener("click", function(e)
{
    e.preventDefault();
    document.getElementById("comments").value= document.getElementById("search").value;
    document.getElementById("search").value='';
    document.getElementById("popup-form").style.display = "block";
}, false) 
    ;
  
    document.getElementById('popup-form').addEventListener("click", function(e){
        
        if(e.target === document.getElementById('popup-form')){
           document.getElementById("popup-form").style.display = "none"; 
        }
    }, false)
    ;
    document.getElementById('p-form').addEventListener("submit", function(e)
    {
        
        e.preventDefault();
       
    
        console.log(document.getElementById('address'));
        if(document.getElementById('address').value === ""||document.getElementById('address').value.lenght < 10){

            document.getElementById('address').classList.add('red');
            return;
        };
        if(document.getElementById('phone').value === ""||document.getElementById('phone').value.lenght < 7){
            document.getElementById('phone').classList.add('red');
            return;
        };
    
        document.getElementById("popup-form").style.display = "none";
    }, false)
    ;
    setInterval(() => {
        const currentDate = new Date().toLocaleString().split(',')[0];
        const currentTime = new Date().toLocaleString().split(',')[1];
        document.querySelector(".special-date").innerHTML = currentDate;
        document.querySelector(".special-time").innerHTML = currentTime;
    }, 1000);
