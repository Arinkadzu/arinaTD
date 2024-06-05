let darkMode = false;
console.log('a');
function switchToDarkMode(state){
    if(state){
    //switch to dark mode
        $('.main-container').addClass('dark-mode');
    }else{
    //switch to light mode
        $('.main-container').removeClass('dark-mode');
    }
}

$(document).ready(function () {

    //Elements render
    console.log($('.switch').val());
    $('.heading').html('<h4>Changed</h4>');
    $('.star--dark').attr('src', 'images/star-dark.svg');
    $('.star--light').attr('src', 'images/star-light.svg');
    $('.stars--light').attr('src', 'images/stars-light.svg');
    $('.stars--dark').attr('src', 'images/stars-dark.svg');

    //Event liestenrs
    // $('.switch input[type="checkbox"]').change(function() {
    //     var isChecked = $(this).is(':checked');
    //     if(!darkMode){
    //         darkMode = true;
    //     }else{
    //         darkMode = false;
    //     }
    //     switchToDarkMode(darkMode);
    // });

    $('.toggle-btn').on('click', function () {
        //var Status = $(this).val();
        console.log('click');
        if(!darkMode){
            darkMode = true;
            $(this).addClass('toggle-btn--dark');
        }else{
            darkMode = false;
        }
        switchToDarkMode(darkMode);
    });

    $('.image-annotation').html(`<span></span>`);

    $('.dropdown-item__icon').html(`<img class="star star--small star--dark" src="images/star-dark.svg" alt="Star element">`);
    

});