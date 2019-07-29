$(function() {
  // create an array of the slide images
  const imageCache = [];
  $("#slides img").each(function() {
    const image = new Image();
    image.src = $(this).attr("src");
    image.title = $(this).attr("alt");
    imageCache.push(image);
  });

  // start slide show
  let imageCounter = 0;
  setInterval(function() {
    $("#caption").fadeOut(1000);
    $("#slide").fadeOut(1000, function() {
      imageCounter = (imageCounter + 1) % imageCache.length;
      const nextImage = imageCache[imageCounter];
      $("#slide")
        .attr("src", nextImage.src)
        .fadeIn(1000);
      $("#caption")
        .text(nextImage.title)
        .fadeIn(1000);
    }); // end callback
  }, 3000);
}); // end ready
