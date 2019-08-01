// Select color input
// Select size input
var height, width, color;

$('#sizePicker').submit(function (event) {
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height,width);
// check console.log();
});

function makeGrid(x,y) {
  $('tr').remove();

  for(var i = 1; i <= x; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for(var j = 1; j <= y; j++) {
      $('#table' + i).append('<td></td>');
  }
}
event.preventDefault();
// CLear grid and add color once selected.
$('td').click(function addColor(){
		color = $('#colorPicker').val();
		if ($(this).attr('style')){
			$(this).removeAttr('style');
		} else{
			$(this).attr('style','background-color:' + color);
		}

	});

}
