// document ready event
$(document).ready(function () {

// input on keypress
    $('input').on("keypress", function (event) {

        if (event.which == 13) {

            var key = "P7NLCftNCTpBvJr3RlwWp8YUZ9RTcKgy";
            var query = this.value;
            var id = this.id;
    
// Giphy random link, gets a single gif back randomly on user input
            var url = "https://api.giphy.com/v1/gifs/random?tag=" 
				    + query
				    + "&api_key="
					+ key;
            
            $.getJSON(url, function (json) {
                console.log(json);

                // displays gifs
             const img = json.data;
                
              if (img.images.downsized.url) {

                    const imgElem = $('<img>')
                        .attr('src', json.data.images.downsized.url);
                    const imgContainer = $('<div>')
                        .addClass('gif');

                    imgContainer.append(imgElem);

// gets specific id for every input 
                    $('#' + id + '-gifs').append(imgContainer);
                }
            });
        }
    });
});