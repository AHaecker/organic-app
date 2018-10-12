<script>
$(document).ready(function() {
    // Load blog posts
    $.ajax({
        url: "https://www.usconcealedcarry.com/wp-json/wp/v2/posts?per_page=3",
        success: function(data) {
            $.each(data, function(i, item) {
                var target = $('#blog-post-' + i);
                target.find('H4').html(item.title);
                target.find('IMG').attr('src', item.featuredImage);
                target.find('A').attr('href', item.link);
                target.find('.blog-post-author').html(item.author);
            })
        }
    })
});
</script>