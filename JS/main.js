var myChart = document.getElementById('myLine');

//global options
Chart.defaults.global.defaultFontFamily = 'roboto';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'white';

var lineChart = new Chart(myLine, {
    type: 'bar', // bar, horizontal, pie, line, doughnut, radar, polarArea
    data: {
        labels: [
            'Gas', 'Food', 'Money'
        ],
        datasets: [
            {
                label: 'Resources',
                data: [
                    290, 250, 310
                ],
                //backgroundColor:'green'
                backgroundColor: [
                    'rgba(61, 56, 56, 1)', 'rgba(115, 231, 115, 1)', 'rgba(231, 227, 115, 1)'
                ],
                borderWidht: 4,
                borderColor: 'rgba(40, 0, 0, 1)',
                hoverBorderWidth: '3',
                hoverBorderColor: 'rgba(122, 122, 122, 1)'

            }
        ]
    },
    options: {

        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Resources left',
            fontSize: 25
        },

        legend: {
            borderColor: false,
            display: true,
            position: 'right',
            labels: {
                fontColor: 'white'
            }
        },
        layout: {
            padding: {
                left: 20,
                right: 0,
                bottom: 0,
                top: 0
            }
        }
    }
});

var pieChart = new Chart(myPie, {
    type: 'pie', // bar, horizontal, pie, line, doughnut, radar, polarArea
    data: {
        labels: [
            'Tax', 'Transport', 'Trade'
        ],
        datasets: [
            {
                label: 'Utilites',
                data: [
                    50, 400, 600
                ],
                //backgroundColor:'green'
                backgroundColor: [
                    'rgba(231, 115, 115, 1)', 'rgba(59, 91, 222, 1)', 'rgba(117, 157, 163, 1)'
                ],
                borderWidht: 4,
                borderColor: 'rgba(40, 0, 0, 1)',
                hoverBorderWidth: '1',
                hoverBorderColor: 'rgba(122, 122, 122, 1)'

            }
        ]
    },
    options: {

        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Expenses',
            fontSize: 25
        },
        legend: {

            display: true,
            position: 'left',
            labels: {}
        },
        layout: {
            padding: {
                left: 20,
                right: 0,
                bottom: 0,
                top: 0
            }
        }
    }
});

var barChart = new Chart(myBar, {
    type: 'polarArea', // bar, horizontal, pie, line, doughnut, radar, polarArea
    data: {
        labels: [
            '65+', 'Dead', 'Born'
        ],
        datasets: [
            {
                data: [
                    50, 100, 75
                ],
                //backgroundColor:'green'
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', 'rgba(140, 140, 140, 1)', 'rgba(128, 117, 163, 1)'
                ],
                borderWidht: 4,
                borderColor: 'rgba(40, 0, 0, 1)',
                hoverBorderWidth: '3',
                hoverBorderColor: 'rgba(122, 122, 122, 1)'

            }
        ]
    },
    options: {

        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Population',
            fontSize: 25,
            fontColor: 'white'

        },
        legend: {

            display: true,
            position: 'left',
            labels: {
                fontColor: 'white'
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            }
        }
    }
});