function getData(){
    let url = "ajax/test.json";
    $.getJSON( url , function( data ) {
            setDataJson(data);
        }) 
        .done(function() {
                console.log( "second success" );
            })
        .fail(function() {
            console.log( "error" );
        })
}

function setDataJson(data){
    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );
  
}

function getDataImg(){
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI,{
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
    })
    .done(function(data){
        $.each( data.items, function( i, item ) {
            $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
            if ( i === 3 ) {
            return false;
            }


        
        })
    })
}
function getDataMovies(){

    /*    $.ajax({
            dataType: "json",
            url: "http://cinemark-api-wrapper.vercel.app/movies",
            success: function(datos) { 
               console.log(datos);
            }
          });*/
}
let test;

$( document ).ready(function() { 
    getData();
    $(".thumb").hover(function(){
        test = $(this);
        
        let imgSelector =  $(this).find("img");
        $(imgSelector).css("width","80px");
        let img = $(imgSelector).prop("src");
        //$('#img_grande').fadeOut("500");
        $('#img_grande img').prop("src",img);
        //$('#img_grande').fadeIn("500");
        $( "#img_grande img" ).animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
          }, 5000, function() {
            // Animation complete.
          });
    })
    getDataImg();

})