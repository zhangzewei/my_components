var processBar = function (barSelector) {
  $(barSelector).find('.process-bar').each(function (_, item) {
    var $item = $(item);
    var backgroundColor = $item.attr('data-bg') || 'none';
    var width = $item.attr('data-percent');
    var startSide = $item.attr('data-start-side') || 'left';
    var startSideCSS = startSide === 'left' ? { left: 0 } : { right: 0 };
    var speed = $item.attr('data-speed') * 1;
    $item.css(startSideCSS)
      .css({ 'background': backgroundColor })
      .animate(
        { width: width }
        , speed || 1000
      );
  })
}