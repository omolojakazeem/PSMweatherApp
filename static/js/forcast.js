const apiKey = '25cc2ff5f14e9f4f3e56f97208ef7d35';
var errorWidget;

$(document).ready(function(){
	$("#submit-forcast").click(function(){
		return getForcastData();
	});

});

function getForcastData(){
	var cityName = $("#city-name").val();
	var duration = $("#duration").val();

	if( cityName && duration != ""){
		$.ajax({
			url:'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName +'&APPID='+apiKey+'&units=metric&cnt='+duration,
			type:"GET",
			dataType:'jsonp',
			success: function(data){
				 var table = '';

				 for(i=0;i<data.list.lenght;i++){
				 	table += "<tr>";
				 	table += "<td>"+data.list[i].weather[0].icon +"</td>";
				 	table += "<td>"+data.list[i].weather[0].main +"</td>";
				 	table += "<td>"+data.list[i].weather[0].description +"</td>";

				 	table += "</tr>";
				 }
				 
				 $("#forcast-data").html(table);
				 $("#error").html("");
				
			}

		});
	} else{
		var errorWidget = showError();
		$("#error").html(errorWidget);
	}

};