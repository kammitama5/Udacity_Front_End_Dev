
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So you live at ' + address + '?')
    // YOUR CODE GOES HERE!

    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location='
 + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    // Your NYTimes Ajax request goes here 
    // copy and paste JSON url to see JSON object
    
    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=blahblahblahmonkeyicecreamchickenwing'
    //mistype to get error message check
    $.getJSON(nytimesUrl, function(data){
        $nytHeaderElem.text('New York Times Articles About ' + cityStr);
        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++){
            var article = articles[i];
            $nytElem.append('<li class="article">' +
                '<a href="' + article.web_url +'">' + article.headline.main+
                '</a>'+
                '<p>' + article.snippet + '</p>' + 
                '</li>');
        }
    }).error(function(e){
        $nytHeaderElem.text("NY Times Articles Could Not be Loaded");
    });
    
    // Wikipedia AJAX request 
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityStr + '&format=json&callback=wikiCallback';
    // mistype url to get error 

    var wikiRequestTimeout = setTimeout(function(){
        $wikiElem.text("failed to get Wikipedia Resources");
    }, 8000);

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        //jsonp: "callback",
        success: function(response){
            var articleList = response[1];

            for (var i = 0; i < articleList.length; i++){
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + 
                    articleStr + '</a></li>');
            };

            clearTimeout(wikiRequestTimeout);//stops timeout from happening
        }
    })
    

    return false;
};

$('#form-container').submit(loadData);
