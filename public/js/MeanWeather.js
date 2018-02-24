$('#search').keyup(function(event) {

    var baseurl = '/weather/search';
    var data = {
        q: $(event.target).val()
    }
    $.get(baseurl, data, function(result, status, xhr) {
        var resultObj = JSON.parse(result);
        console.log(resultObj.suggestions);
        $('#results').html('');
        var count = resultObj.suggestions.length;
        var htmlStr = '';
        for (var i = 0; i < count; i++) {
            var sug = resultObj.suggestions[i];
            if (sug.label != undefined) {
                htmlStr += '<li class="location-result" data-location="' + sug.locationId + '">' + sug.label + '</li>';
            }
        };
        $('#results').html(htmlStr);

        // Refresh events
        events();

    });
});

function events() {
    $('.location-result').click(function(event) {
        $('#results').children().each(function() {
            $(this).fadeOut(250, null);
        });
    });
}
