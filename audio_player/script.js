//alert(typeof $);
$.fn.tabify = function (options) {
    var settings = $.extend({}, $.fn.tabify.defaults, options);

    $('[role="tabpanel"]:not(:first)').hide(); // Hiding all but the first tabpanel
    this.eq(0).addClass(settings.classForSelectedTab); // Adding the 'current' class to the first tab

    return this.each(function () {
        var $this = $(this),
            id = $this.attr('id');

        $this.on('click', function (e) {
            var $tabs = $('[role="tablist"] li'), $tabpanels = $('[role="tabpanel"]'), $target = $('[aria-labelledby="' + id + '"]');

            e.preventDefault();

            $tabs.removeClass(settings.classForSelectedTab).attr('aria-selected', false);
            $this.addClass(settings.classForSelectedTab).attr('aria-selected', true);

            $tabpanels.hide().attr('aria-hidden', true);
            $target.show().attr('aria-hidden', false);
        });

    });
};

$.fn.tabify.defaults = {
    'classForSelectedTab': 'selected'
};

$("ul[role='tablist'] li").tabify();