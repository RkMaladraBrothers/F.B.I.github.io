$(function() {
 $('.view_details').click(function() {
  if ($(this).is(':checked')) {
   $(this)
    .next('label')
    .html('&times;')
    .attr('title', 'tap here to close full profile');
   $(this)
    .parent()
    .next('main')
    .slideDown('normal');
  } else {
   $(this)
    .next('label')
    .html('☰')
    .attr('title', 'tap here to view full profile');
   $(this)
    .parent()
    .next('main')
    .slideUp('fast');
  }
 });
});


$(function() {
 $('.view_details1').click(function() {
  if ($(this).is(':checked')) {
   $(this)
    .next('label')
    .html('&times;')
    .attr('title', 'tap here to close full profile');
   $(this)
    .parent()
    .next('main')
    .slideDown('normal');
  } else {
   $(this)
    .next('label')
    .html('☰')
    .attr('title', 'tap here to view full profile');
   $(this)
    .parent()
    .next('main')
    .slideUp('fast');
  }
 });
});





$(document).ready(function()
{

 $("#Hide2").click(function()
 {

  $("#H").toggle();

 });

});

$(document).ready(function()
{

 $("#h").click(function()
 {

  $("#H").hide();

 });

});




$(document).ready(function()
{

 $("#R2").click(function()
 {

  $("#H2").toggle();

 });

});

$(document).ready(function()
{

 $("#h2").click(function()
 {

  $("#H2").hide();

 });

});