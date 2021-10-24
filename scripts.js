//Function to check if the email is valid
// Referenced from https://www.w3docs.com/snippets/javascript/how-to-validate-an-e-mail-using-javascript.html
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

window.onload = function() //As soon as you start the window
{
    var button = document.querySelectorAll("button")[0];
    
    button.addEventListener("click",function(event) //When subscribe is clickec
    {
        var email = document.querySelector("input[type=email]").value;
        var message = document.querySelector(".message");
        
        //Test if it's valid and print the right message
        if (validateEmail(email)) 
        {
            message.innerHTML = "Thank you! Your email address has been added to our mailing list!";
        } 
        else
        {
            message.innerHTML = "Please enter a valid email address";
        }
    }
    );   
}