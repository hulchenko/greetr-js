let g = G$('Vadym', 'Hulchenko');
g.greet().setLang('en').greet(true).log();

$('#login').click(function () {
  var loginGreet = G$('Vadym', 'Hulchenko');
  $('#logindiv').hide();
  loginGreet
    .setLang($('#lang').val())
    .onScreenGreeting('#greeting', true)
    .log();
});
