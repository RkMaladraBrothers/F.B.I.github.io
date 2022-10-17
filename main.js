  function searchBox() {
   var x = document.getElementById('myInput').value;
   var y = document.getElementById('header');
   if (x.length > 0) {
    y.style.display = 'inline';
    document.getElementById('Hide1').style.display = 'none';
    document.getElementById('Hide2').style.display = 'none';
   }

   else {
    y.style.display = 'none';
    document.getElementById('Hide1').style.display = 'block';
    document.getElementById('Hide2').style.display = 'block';
    document.getElementById('H2').style.display = 'none';
   }
  }
  document.getElementById("myInput").addEventListener("onkeyup", function() {
   searchBox();
  });
  
  /*   END   */
  
   var $rows = $('#header tr');
$('#myInput').keyup(function() {
    
    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text;
    
    $rows.show().filter(function() {
        text = $(this).text().replace(/\s+/g, ' ');
        return !reg.test(text);
    }).hide();
});

 window.addEventListener("DOMContentLoaded", function(e) {
    var myHilitor2 = new Hilitor("header");
    myHilitor2.setMatchType("left");
   document.getElementById("myInput").addEventListener("keyup", function(e) {
      myHilitor2.apply(this.value);
    }, false);
  }, false);