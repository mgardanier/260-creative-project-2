
$(document).ready(function () {
  $("#codSubmit").click( function(e) {
    e.preventDefault();
    var value = $("#playerName").val();
    //value = value.split(' ').join('%20');
    //var url = encodeURI("https://my.callofduty.com/api/papi-client/crm/cod/v2/title/wwii/platform/xbl/gamer/" + value + "/profile/");
    var url = encodeURI("https://itunes.apple.com/search?term=" + value);
    console.log(url);
    //$.get(url, responseMethod);

    $.ajax({
      url : url,
      dataType : "json",
      success : function(json) {
        console.log("success");
        var result = "";
        console.log(json);
        result += "<p>Songs by " + value + ":</p>";
        result += "<br><ol>";
        for (var i = 0; i < json.results.length; i++) {
          if(json.results[i].kind === 'song'){
            result += "<li>" + json.results[i].trackName + "</li>";
          }
        }
        result += "</ol>";
        $("#musicSearchResults").html(result);

        }
    });
  });
});
