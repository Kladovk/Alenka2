window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn_menu').addEventListener('click', function(){
        console.log('2')
        document.querySelector('.menu').classList.toggle('is-active');

    });
});
//document.querySelector('.menu').classList.toggle('is-active')