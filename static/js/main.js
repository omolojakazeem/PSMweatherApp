const apiKey = '25cc2ff5f14e9f4f3e56f97208ef7d35';
var errorWidget;

$(document).ready(function(){
	$("#submit-city").click(function(){
		return getData();
	});

});

function getData(){
	var cityName = $("#city-name").val();

	if (cityName != ''){
		$.ajax({
			url : 'https://api.openweathermap.org/data/2.5/weather?q='+cityName +'&appid='+apiKey+'&units=metric',
			type:"GET",
			dataType:'jsonp',
			success: function(data){
				 var widget = showResult(data);
				 $("#results").html(widget);
				 $("#error").html("");
				
			}

		});
		//cityName = '';
	}else{
		var errorWidget = showError();
		$("#error").html(errorWidget);
		//$("#error").html("<div>City Name cannot be empty</div>")
	}
}

function showResult(data){
	return	'<table class="table"><caption>Weather Data for <strong><i>'+ data.name + '</i></strong></caption>'+
	'<tbody>'+
	'<tr><td>Weather Summary</td><td>'+data.weather[0].main+'</td></tr>'+
	'<tr><td>Weather Description</td><td><img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'.png">'+data.weather[0].description+'</td></tr>'+
	'<tr><td>Temperature</td><td>'+data.main.temp+'&degC</td></tr>'+
	'<tr class="bg-warning"><td >Min. Temp.</td><td>'+data.main.temp_min+'&degC</td></tr>'+
	'<tr class="bg-danger"><td>Max. Temp.</td><td>'+data.main.temp_max+'&degC</td></tr>'+
	'<tr><td>Pressure</td><td>'+data.main.pressure+' <i>hPa</i></td></tr>'+
	'<tr><td>Humidity</td><td>'+data.main.humidity+' %</td></tr>'+
	'<tr><td>Wind Speed</td><td>'+data.wind.speed+' <i>m/s</i></td></tr>'+
	'<tr><td>Wind Direction</td><td>'+data.wind.deg+'&deg</td></tr>'+
	
	'</tbody>'+
	'</table>';

}

function showError(){
	return	 '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong> Please input a City Name'+
			 '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
			 '<span aria-hidden="true">&times;</span>'+
			 '</button></div>'
}
