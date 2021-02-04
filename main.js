
var temp = [];
var count=0;

window.onload = function getQuotes(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://type.fit/api/quotes", true);

    xhr.onload = function(){
        
        if(this.status==200){

            temp = JSON.parse(this.responseText);
            document.getElementById("text-area").innerHTML ='" '+temp[0].text+'"';
            document.getElementById("author-area").innerHTML = "Author : "+temp[0].author;
            
             }
 }

xhr.send();

}



document.getElementById("btn2").addEventListener("click", function(){
    count++;
    document.getElementById("text-area").innerHTML = '" '+temp[count].text+'"';
    document.getElementById("author-area").innerHTML = "Author : "+temp[count].author;
    
    





})



document.getElementById("btn1").addEventListener("click", function(){
     
    if(count<=0){

        alert("This is begining, Move forward");
    }
    else
    {
        count--;
    }

    
    document.getElementById("text-area").innerHTML = '" '+temp[count].text+'"';
    document.getElementById("author-area").innerHTML = "Author : "+temp[count].author;
    
    
    
            





})





       
    
       

       
        
        


    