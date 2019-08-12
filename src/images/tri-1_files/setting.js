function searchAvailability() {
    var e = "https://reservation.travelanium.net/propertyibe2/?",
        a = "propertyId=",
        n = "onlineId=",
        t = "checkin=",
        o = "checkout=",
        r = "numofadult=",
        l = "numofchild=",
        c = "numofroom=",
        i = "accesscode=",
        d = "388",
        s = "4",
        h = $("#txtcalendarin").val(),
        m = $("#txtcalendarout").val(),
        u = $("#adult").val(),
        w = $("#child").val(),
        f = $("#room").val(),
        v = $("#accesscode").val();
    if ("" == v) var p = "";
    else var p = $("#accesscode").val();
    var C = e + a + d + "&" + n + s + "&" + t + h + "&" + o + m + "&" + r + u + "&" + l + w + "&" + c + f + "&" + i + p;
    window.open(C, "_blank")
}

function onSelectedCheckinDate(e, a) {
    if (a) {
        var n = new Date(a),
            t = n.getTime() + 864e5;
        n = new Date(t), $(e).datepicker("option", "minDate", n), $(e).datepicker("show")
    }
}

function beforeShowCheckOutDate(e, a, n) {
    var t = $(e).val(),
        o = new Date;
    t && (o = new Date(t));
    var r = o.getTime() + 864e5;
    o = new Date(r), $(a).datepicker("option", "minDate", o)
}
var txtCalendarCheckIn = "#txtcalendarin",
    txtCalendarCheckOut = "#txtcalendarout";
$(function() {
    $(txtCalendarCheckIn).datepicker({
        minDate: new Date,
        changeMonth: !0,
        changeYear: !0,
        dateFormat: "yy-mm-dd",
        altFormat: "yy-mm-dd",
        numberOfMonths: 2,
        onClose: function(e) {
            onSelectedCheckinDate(txtCalendarCheckOut, e)
        }
    }), $(txtCalendarCheckOut).datepicker({
        defaultDate: "+2d",
        changeMonth: !0,
        changeYear: !0,
        dateFormat: "yy-mm-dd",
        altFormat: "yy-mm-dd",
        numberOfMonths: 2,
        beforeShow: function(e, a) {
            beforeShowCheckOutDate(txtCalendarCheckIn, txtCalendarCheckOut, a)
        }
    })
}), $(window).load(function() {
    $("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({
        overflow: "visible"
    })
});

//Dynamic top menu positioning 
        var num = 1; //number of pixels before modifying styles

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('.navbar-fixed-top').addClass('mini-header');
            } else {
                $('.navbar-fixed-top').removeClass('mini-header');
            }
        });
// show back to top button  
        var num = 1; //number of pixels before modifying styles

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('.btn-bck-to-top').addClass('show');
            } else {
                $('.btn-bck-to-top').removeClass('show');
            }
        });

$(document).ready(function() {
    $('a[href^="#"]').on("click", function(e) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var a = $(this.hash);
            if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
                scrollTop: a.offset().top
            }, 1e3), !1
        }
    })
});
// Dropdown Menu setting
$(document).ready(function($){
        $('.megamenu').megaMenuCompleteSet({
            menu_speed_show : 300, // Time (in milliseconds) to show a drop down
            menu_speed_hide : 200, // Time (in milliseconds) to hide a drop down
            menu_speed_delay : 200, // Time (in milliseconds) before showing a drop down
            menu_effect : 'hover_slide', // Drop down effect, choose between 'hover_fade', 'hover_slide', etc.
            menu_click_outside : 1, // Clicks outside the drop down close it (1 = true, 0 = false)
            menu_show_onload : 0, // Drop down to show on page load (type the number of the drop down, 0 for none)
            menu_responsive:1 // 1 = Responsive, 0 = Not responsive
        });
    });
// Shadowbox
Shadowbox.init({ language: 'en', players: ['img', 'html', 'iframe', 'qt', 'wmp', 'swf', 'flv'] }); 
  // Disable scroll zooming and bind back the click event
  var onMapMouseleaveHandler = function (event) {
    var that = $(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }

  var onMapClickHandler = function (event) {
    var that = $(this);

    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);

    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");

    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }

  // Enable map zooming with mouse scroll when the user clicks the map
  $('.maps.hotel-map-frame').on('click', onMapClickHandler);