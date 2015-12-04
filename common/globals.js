/**
 * Created by charlie on 12/2/15.
 */
days = ['Mo','Tu','We','Th','F1','F2','F3','F4','Sa','Su'];

schoolyear = {
    '2015-12-03': 'Th',
    '2015-12-04': 'F4',
    '2015-12-05': 'Sa',
    '2015-12-06': 'Su',
    '2015-12-07': 'Mo',
    '2015-12-08': 'Tu',
    '2015-12-09': 'We',
    '2015-12-10': 'Th',
    '2015-12-11': 'F1',
    '2015-12-12': 'Sa',
    '2015-12-13': 'Su',
    '2015-12-14': 'Mo',
    '2015-12-15': 'Tu',
    '2015-12-16': 'We',
    '2015-12-17': 'Th',
    '2015-12-18': 'F2'
};

dayschedules = {
    Mo: {
        name: "Monday",
        B: {start: 810, end: 855},
        A: {start: 900, end: 945},
        E: {start: 1010, end: 1055},
        F: {start: 1100, end: 1145},
        I: {start: 1150, end: 1235},
        H: {start: 1340, end: 1425},
        G: {start: 1430, end: 1515},
        Z: {start: 1600, end: 1800},
        PM: {start: 1800, end: 2000}
    },
    Tu: {
        name: "Tuesday",
        C: {start: 810, end: 855},
        D: {start: 900, end: 945},
        H: {start: 1010, end: 1055},
        G: {start: 1100, end: 1145},
        I: {start: 1150, end: 1235},
        B: {start: 1340, end: 1425},
        A: {start: 1430, end: 1515},
        Z: {start: 1600, end: 1800},
        PM: {start: 1800, end: 2000}
    },
    We: {
        name: "Wednesday",
        E: {start: 810, end: 855},
        F: {start: 900, end: 945},
        H: {start: 1010, end: 1055},
        G: {start: 1100, end: 1145},
        I: {start: 1150, end: 1235},
        D: {start: 1305, end: 1350},
        C: {start: 1355, end: 1440},
        Z: {start: 1600, end: 1800},
        PM: {start: 1800, end: 2000},
        1: {start:810, end:900},
        4: {start:1100, end:1145}
    },
    Th: {
        name: "Thursday",
        B: {start: 810, end: 855},
        A: {start: 900, end: 945},
        D: {start: 1010, end: 1055},
        C: {start: 1100, end: 1145},
        L: {start: 1150, end: 1245},
        E: {start: 1340, end: 1425},
        F: {start: 1430, end: 1515},
        Z: {start: 1600, end: 1800},
        PM: {start: 1800, end: 2000}
    },
    F1: {
        name: "Friday 1",
        E: {start: 810, end: 855},
        F: {start: 900, end: 945},
        A: {start: 1010, end: 1055},
        B: {start: 1100, end: 1145},
        I: {start: 1150, end: 1235},
        G: {start: 1340, end: 1425},
        H: {start: 1430, end: 1515},
        Z: {start: 1600, end: 1800},
        PM: {start: 1800, end: 2000},
        234: {start: 905, end: 1145}
    },
    F2: {
        name: "Friday 2",
        C: {start: 810, end: 855},
        D: {start: 900, end: 945},
        H: {start: 1010, end: 1055},
        G: {start: 1100, end: 1145},
        L: {start: 1150, end: 1245},
        F: {start: 1340, end: 1425},
        E: {start: 1430, end: 1515},
        Z: {start: 1600, end: 1800},
        PM: {start: 1800, end: 2000}
    },
    F3: {
        name: "Friday 3",
        E: {start: 810, end: 855},
        F: {start: 900, end: 945},
        A: {start: 1010, end: 1055},
        B: {start: 1100, end: 1145},
        I: {start: 1150, end: 1235},
        C: {start: 1340, end: 1425},
        D: {start: 1430, end: 1515},
        Z: {start: 1600, end: 1800},
        PM: {start: 1800, end: 2000},
        234: {start: 905, end: 1145}
    },
    F4: {
        name: "Friday 4",
        C: {start: 810, end: 855},
        D: {start: 900, end: 945},
        H: {start: 1010, end: 1055},
        G: {start: 1100, end: 1145},
        I: {start: 1150, end: 1235},
        A: {start: 1340, end: 1425},
        B: {start: 1430, end: 1515},
        Z: {start: 1600, end: 1800},
        PM: {start: 1800, end: 2000}
    },
    Sa: {
        name: "Saturday"
    },
    Su: {
        name: "Sunday"
    }
};

timescale = function(time) {
    var minutes = time%100;
    var hours = Math.floor(time/100);

    return (hours/24)+(minutes/1440);
};