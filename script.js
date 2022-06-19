document.addEventListener('DOMContentLoaded', setVal);

var targetScrollPos;

function setVal()
{
    console.log("ok");
    var menu = document.querySelectorAll('#floatMenu ul li');
    var contents = document.querySelectorAll('#mainContainer > section');

    for ( var i =0; i < menu.length; i++)
    {
        menu[i].addEventListener('click',menuClick);

        function menuClick()
        {
            var index = this.getAttribute('clickVal');
            targetScrollPos = contents[index].offsetTop;

            console.log(targetScrollPos);

            window.scroll(0,targetScrollPos );
        }
    }

}