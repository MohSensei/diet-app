// Script for rendering charts using Chart.js

// Line chart for weight progress
var ctx = document.getElementById('weightProgressChart').getContext('2d');
var weightProgressChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Weight Progress',
            data: [159, 158, 157, 156, 155, 154],
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            borderColor: 'rgba(52, 152, 219, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Pie chart for body composition
var ctx2 = document.getElementById('bodyCompositionChart').getContext('2d');
var bodyCompositionChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Body Fat', 'Lean Mass'],
        datasets: [{
            data: [16.6, 83.4],
            backgroundColor: [
                '#8e44ad',
                '#f1c40f'
            ],
            borderColor: [
                'rgba(0, 0, 0, 0.1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});
