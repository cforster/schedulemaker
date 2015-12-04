/**
 * Created by charlie on 12/2/15.
 */
Template.day.helpers({
    dayevents: function (dayparam) {
        return Schedules.find({day: dayparam},{period:1}).map(function(u) {
            var starttime = dayschedules[u.day][u.period].start;
            var endtime = dayschedules[u.day][u.period].end;
            var starthour = 800;

            u.scalestart = timescale(starttime-starthour)*1000;
            u.scaleduration = timescale(endtime-starthour)*1000 - u.scalestart;
            return u;
        });
    }
});

Template.day.events({
    'mouseenter.event': function (event) {
        $(event.currentTarget.className.replace("event ",".")).css('background-color', 'red');
    },
    'mouseleave.event': function (event) {
        $(event.currentTarget.className.replace("event ",".")).css('background-color', '');
    }

});


//$(function() {
//    $(".period-I").hover(function() {
//        $(this.className.replace("event ",".")).css('background-color', 'red');
//    }, function() {
//        // on mouseout, reset the background colour
//        $(this.className.replace("event ",".")).css('background-color', '');
//    });
//});
//[#document]