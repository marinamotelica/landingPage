document.getElementById('popup').addEventListener("click", function(e)
{
    e.preventDefault();
    document.getElementById("comments").value= document.getElementById("search").value;
    document.getElementById("search").value='';
    document.getElementById("popup-form").style.display = "block";
}, false) 
    ;
  
    document.getElementById('order').addEventListener("click", function(e)
    {
        e.preventDefault();
    
        document.getElementById("popup-form").style.display = "none";
    }, false) 
        ;
