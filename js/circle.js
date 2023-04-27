$(document).ready(function() {
    var currentIndex = 0;
    var imgText = ["Paint Ball", "Cricket", "Football", "Swimming", "Volleyball"];
    function upText() {
      var currentText = imgText[currentIndex];
      $('#circle-text').css('visibility','visible');
      $('#circle-text').text(currentText);
      if(currentIndex == 0)
      {
        $('#i2').css('transform', 'scale(1)');
        $('#i3').css('transform', 'scale(1)');
        $('#i4').css('transform', 'scale(1)');
        $('#i5').css('transform', 'scale(1)');
        $('#i1').css('transform', 'scale(1.2)');
      }else if(currentIndex==1)
      {
        $('#i2').css('transform', 'scale(1.2)');
        $('#i3').css('transform', 'scale(1)');
        $('#i4').css('transform', 'scale(1)');
        $('#i5').css('transform', 'scale(1)');
        $('#i1').css('transform', 'scale(1)');
      }else if(currentIndex==2)
      {
        $('#i2').css('transform', 'scale(1)');
        $('#i3').css('transform', 'scale(1.2)');
        $('#i4').css('transform', 'scale(1)');
        $('#i5').css('transform', 'scale(1)');
        $('#i1').css('transform', 'scale(1)');
      }else if(currentIndex==3)
      {
        $('#i2').css('transform', 'scale(1)');
        $('#i3').css('transform', 'scale(1)');
        $('#i4').css('transform', 'scale(1.2)');
        $('#i5').css('transform', 'scale(1)');
        $('#i1').css('transform', 'scale(1)');
      }else
      {
        $('#i2').css('transform', 'scale(1)');
        $('#i3').css('transform', 'scale(1)');
        $('#i4').css('transform', 'scale(1)');
        $('#i5').css('transform', 'scale(1.2)');
        $('#i1').css('transform', 'scale(1)');
      }
      currentIndex++;
      if (currentIndex >= imgText.length) {
        currentIndex = 0;
      }
    }
    upText();
     var intervalId = setInterval(upText, 2500); 

});