$(document).ready(function(){
    $.getJSON("swapi.json", function(data){
        var swapi_data = '';
        $.each(data, function(key, value){
            swapi_data += '<tr>';
            swapi_data += '<td>'+value.name+'</td>';
            swapi_data += '<td>'+value.rotation_period+'</td>';
            swapi_data += '<td>'+value.orbital_period+'</td>';
            swapi_data += '<td>'+value.diameter+'</td>';
            swapi_data += '<td>'+value.climate+'</td>';
            swapi_data += '<td>'+value.gravity+'</td>';
            swapi_data += '<td>'+value.terrain+'</td>';
            swapi_data += '<td>'+value.surface_water+'</td>';
            swapi_data += '<td>'+value.population+'</td>';
            swapi_data += '<td>'+value.residents+'</td>';
            swapi_data += '<td>'+value.films+'</td>';
            swapi_data += '<td>'+value.created+'</td>';
            swapi_data += '<td>'+value.edited+'</td>';
            swapi_data += '<td>'+value.url+'</td>';
            swapi_data += '</tr>';
        });
        $('#swapi_table').append(swapi_data);
    });
});