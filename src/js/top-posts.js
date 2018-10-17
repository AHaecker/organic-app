$(document).ready(function() {
    // Load blog posts
    $.ajax({
        url: "https://www.usconcealedcarry.com/wp-json/wp/v2/posts?per_page=10",
        success: function(data) {
            var displayCounter = 0;
            $.each(data, function(i, item) {
                if (item.hasFeaturedVideo == true || displayCounter > 2) {
                    continue;
                }
                var target = $('#blog-post-' + displayCounter);
                target.find('H5').html(item.title);
                target.find('IMG').attr('src', item.featuredImage);
                target.find('A').attr('href', item.link);
                target.find('.blog-post-author').html(item.author);
                displayCounter++;
            })
        }
    })
 });