$(document).ready(function() {
    $('#password').on('input', function() {
      var password = $(this).val();
      var meter = $('.strength-meter');
      var strength = 0;
      var progressClass = '';
  
      if (password.length > 8) {
        strength += 1;
      }

      if (password.match(/[A-Z]/)) {
        strength += 1;
      }
  
      if (password.match(/[a-z]/)) {
        strength += 1;
      }
  
      if (password.match(/\d/)) {
        strength += 1;
      }
  
      if (password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        strength += 1;
      }
  
      var width = 0;

switch(strength) {
  case 0:
    progressClass = 'very-weak';
    width = 20;
    break;

  case 1:
    progressClass = 'weak';
    width = 40;
    break;

  case 2:
    progressClass = 'medium';
    width = 60;
    break;

  case 3:
    progressClass = 'strong';
    width = 80;
    break;

  case 4:
  case 5:
    progressClass = 'very-strong';
    width = 100;
    break;
}
      meter.removeClass().addClass('strength-meter').addClass(progressClass).css('width', width + '%');
    });
  });
