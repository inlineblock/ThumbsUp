var ThumbsUp = function (element , o) {
  o = o || {};
  var size = 13,
    $body = $(document.body),
    $el = $('<div class="thumbsup">' + (o.character || '&#xf087;') + '</div>'),
    $anchor = $(element),
    offset = $anchor.offset(),
    anchorWidth = $anchor.width(),
    anchorHeight = $anchor.height(),
    windowHeight = $(window).height(),
    windowWidth = $(window).width(),
    newFontSize = Math.floor(Math.min(windowHeight , windowWidth) * 1.2),
    color = o.color || 'black',
    easing = o.easing || 'swing',
    speed = o.speed || 750,
    newTop = (windowHeight/2) - (newFontSize/2),
    newLeft = (windowWidth/2) - ((newFontSize)/2);

    $body.append($el);

    $el.css({
      fontFamily: 'FontAwesome',
      position: 'fixed',
      top: (offset.top + Math.floor(anchorHeight/2)) - $body.scrollTop(),
      left: (offset.left + Math.floor(anchorWidth/2)) - $body.scrollLeft(),
      fontSize: size,
      opacity: 1,
      width: newFontSize,
      color: color,
    });
    $el.animate({
      fontSize: newFontSize,
      opacity: 0,
      left: newLeft < 0 ? 0 : newLeft,
      top: newTop < 0 ? 0 : newTop
    } , speed , easing , function () {
      $(this).remove()
    })
}
