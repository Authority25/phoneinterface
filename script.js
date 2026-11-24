let lockscreen = document.getElementById('lockscreen');
let line = document.getElementById('line');
let homescreen = document.getElementById('homescreen');
let widget = document.getElementById('widget');
let applications= document.getElementById('applications');
let easynav = document.getElementById('easynav')
let battertndnetwork = document.getElementById('battertndnetwork');
line.addEventListener('click',function(){
    lockscreen.classList.add('cutout')
    widget.classList.remove('cutout')
    applications.classList.remove('cutout')
    easynav.classList.remove('cutout')
    homescreen.classList.remove('cutout')
    battertndnetwork.classList.remove('cutout')
})