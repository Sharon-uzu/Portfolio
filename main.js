var menubar = document.getElementById('menubar');
var closebar = document.getElementById('closebar');
var link = document.getElementById('link');


menubar.addEventListener('click', function(){
    menubar.style.display = 'none';
    link.style.display = 'block';
    closebar.style.display = 'block';
})

closebar.addEventListener('click', function(){
    menubar.style.display = 'block';
    link.style.display = 'none';
    closebar.style.display ='none'
})

