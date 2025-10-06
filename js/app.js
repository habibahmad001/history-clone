// Simple JS for interactivity (nav arrows, play overlay, signup)
$(function(){
  // play overlay on video placeholder
  $('.video-placeholder').on('click', function(){
    alert('Video play placeholder — replace with real video embed if desired.');
  });

  // basic search focus
  $('.search').on('click', function(){
    alert('Search placeholder — hook up search if needed.');
  });

  // signup form
  $('.signup-form').on('submit', function(e){
    e.preventDefault();
    var email = $(this).find('input[type=email]').val();
    if(!email) return alert('Enter an email');
    alert('Thanks — demo signup: ' + email);
    $(this).find('input[type=email]').val('');
  });
});
