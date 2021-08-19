//Time stuff
const dailyHours = 24;

var currDate = new Date();
var currHour = currDate.getHours();
var currMinutes = currDate.getMinutes();
console.log("Current date: ", currDate);
console.log("Current hour: ", currHour);
console.log("Current minute: ", currMinutes);

var startHour = 6;
var startMinutes = 30;

var totalHours = 3;
var totalMinutes = 30;

//Timer code


//Create donught chart
var ctx = document.getElementById("myDonut");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
        label: '# of Tomatoes',
        data: [12, 19, 3, 5],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
        }]
    },
    options: {
        //cutoutPercentage: 40,
        responsive: true,

    }
});