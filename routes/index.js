// WEATHER ROUTES

module.exports = function(app, gbl) {
    var dataDef = {
        stylesheets: [
            'css/master-dark.css'
        ],
        title: 'Weather',
        headScripts: [],
        endScripts: [
            'js/navs.js',
            'js/forms.js',
            'js/global.js',
            'js/MeanWeather.js'
        ]
    }

    function setDefaultData(dataDef) {
        return dataDef;
    }

    app.get('/', function(req, res) {
        var data = JSON.parse(JSON.stringify(dataDef));
        console.log(data);
        data.endScripts.push('js/canv-hero.js');
        data.endScripts.push('js/index.js');
        data.stylesheets.push('css/index.css');
        data.title = "MeanWeather";
        res.render('index', data);
    });

    app.get('/search', function(req, res) {

        // Build requiest URL
        var baseurl = 'https://autocomplete.geocoder.cit.api.here.com/6.2/suggest.json';
        var reqData = {
            app_id: gbl.config.keys.here_app_id,
            app_code: gbl.config.keys.here_app_code,
            query: req.query.q
        };
        var reqDataString = '?' + gbl.querystring.stringify(reqData);

        // Send request to HERE API
        gbl.request(baseurl + reqDataString, function(error, response, body) {
            console.log(baseurl + reqDataString);
            res.send(body);
        });
    });

    app.get('/setlocation', function(req, res) {
        var baseurl = "";
        var reqData = {};
        var reqDataStr = '?' + gbl.querystring.stringify(reqData);

        // Send request to Open Weather API
        gbl.request(baseurl + reqDataStr, function(error, response, body) {
            res.send(body);
        });
    });
}