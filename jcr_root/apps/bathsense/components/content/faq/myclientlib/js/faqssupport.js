$(document).ready(function() {
    accordion();
});

function accordion() {
    $('.acc-head').click(function(e) {
        var $this = $(this);
        var parentElm = $this.closest(".acc-item");
        if ($this.hasClass("active")) {
            parentElm.find(".acc-cont").removeClass("active");
            $this.removeClass("active");
            parentElm.find(".acc-cont").slideUp();
        } else {
            $(".cp-accordion").find(".acc-cont").removeClass("active");
            $(".cp-accordion").find(".acc-head").removeClass("active");
            $(".cp-accordion").find(".acc-cont").slideUp();
            parentElm.find(".acc-cont, .acc-head").addClass("active");
            parentElm.find(".acc-cont").slideDown();
        }
    });
}
