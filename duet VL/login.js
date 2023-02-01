// $('input[type="password]').on('focus',(){
//     $('*').addClass('password');}).on('focusout',() =>{$('*'),removeClass('password');});;
$('input[type="password"]').on('focus', () => {
    $('*').addClass('password');
  }).on('focusout', () => {
    $('*').removeClass('password');
  });;

