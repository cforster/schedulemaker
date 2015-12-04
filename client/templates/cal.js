/**
 * Created by charlie on 12/2/15.
 */
Template.day.helpers({
    dayevents: function (dayparam) {
        return Schedules.find({day: dayparam}).map(function(u) {
            var starttime = dayschedules[u.day][u.period].start;
            var endtime = dayschedules[u.day][u.period].end;
            var starthour = 800;

            u.scalestart = timescale(starttime-starthour)*1000;
            u.scaleduration = timescale(endtime-starthour)*1000 - u.scalestart;
            return u;
        });
    }
});