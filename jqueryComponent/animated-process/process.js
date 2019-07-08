var processBar = function (barSelector) {
  $(barSelector).find('.process-bar').each(function (_, item) {
    var $item = $(item);
    var backgroundColor = $item.attr('data-bg') || 'none';
    var width = $item.attr('data-percent');
    var speed = $item.attr('data-speed') * 1;
    $item.css({ 'background': backgroundColor })
      .animate(
        {
          width: width,
          opacity: 1
        }
        , speed || 1000
      );
  })
}

var processNumber = function (numberSelectors) {
  $(numberSelectors).each(function (_, item) {
    var $item = $(item);
    var suffix = $item.attr('data-suffix');
    var during = $item.attr('data-during') * 1;
    var number = $item.attr('data-num') * 1;
    var speed = during / number;
    $item.css({ width: number - 5 + '%' });
    $item.attr('data-curNumber', 0);
    var timer = setInterval(function () {
      var curNumber = $item.attr('data-curNumber') * 1;
      if (curNumber < number) {
        curNumber += 1;
        $item.attr('data-curNumber', curNumber);
        $item.text(curNumber + suffix);
      } else {
        clearInterval(timer);
        timer = null;
      }
    }, speed);
  });
}