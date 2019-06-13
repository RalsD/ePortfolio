$(function() {
    $.ajax({
        type: "GET",
        url: "./articles/cakes.csv",
        dataType: "text",
        success: function(data) {
            displayArticles(data);
        }
    });

    function displayArticles(data) {
        var cakesList = $.csv.toObjects(data);
        for (i = 0; i < cakesList.length; ++i) {

            var div = $("<div>", { "id": "cake" + i });

        }
    }

});