const ctx1 = document.getElementById('weightProgressChart').getContext('2d');
const weightProgressChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Weight Progress',
            data: [159, 158.5, 157.8, 157, 156, 154.5],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

const ctx2 = document.getElementById('bodyCompositionChart').getContext('2d');
const bodyCompositionChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Body Fat', 'Lean Mass'],
        datasets: [{
            label: 'Body Composition',
            data: [30, 70],
            backgroundColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 205, 86, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true
    }
});
