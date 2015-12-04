Template.importSchedule.events({
    'submit .parseschedule': function (event) {
        event.preventDefault();
        var data = event.target.scheduleblob.value.split("\n");

        data.forEach(function(d) {
            var line = d.split("\t");

            for (var i = 4; i < line.length; i++) {
                if (line[i].length > 0) {
                    insertset = {
                        course: line[0],
                        title: line[1],
                        room: line[3],
                        day: days[i - 4],
                        period: line[i]
                    };
                    Schedules.insert(insertset);

                }
            }
        });
        //Messages.insert({text: "Hello world", room: myRooms[0]._id});
    }
});