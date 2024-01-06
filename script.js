let donutChart, pieChart, barChart;
let isRecent = true;

window.onload = function() {
    const initialSalesDataDonut = [300, 400, 500];
    const initialSalesDataPie = [500, 700, 600];
    const initialSalesDataBar = [200, 300, 250];

    createDonutChart(initialSalesDataDonut);
    createPieChart(initialSalesDataPie);
    createBarChart(initialSalesDataBar);
};

function createPieChart(salesData) {
    const pieCanvas = document.getElementById('pieChart');
    const ctxPie = pieCanvas.getContext('2d');

    pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Two Month', 'Last Months', 'Current Month'],
        datasets: [{
        label: 'Sales',
        data: salesData,
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Sales',
                color: 'black' // Change title color to black
            }
        },
    }
    });
}

function createDonutChart(salesData) {
    const donutCanvas = document.getElementById('donutChart');
    const ctxDonut = donutCanvas.getContext('2d');

    donutChart = new Chart(ctxDonut, {
    type: 'doughnut',
    data: {
        labels: ['Two Month', 'Last Months', 'Current Month'],
        datasets: [{
        label: 'Leads',
        data: salesData,
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Leads',
                color: 'black' // Change title color to black
            }
        },
    }
    });
}


function createBarChart(salesData) {
    const barCanvas = document.getElementById('barChart');
    const ctxBar = barCanvas.getContext('2d');

    barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Last Month', 'Two Months', 'Current Month'],
        datasets: [{
        label: 'Revenue',
        data: salesData,
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Revenue',
                color: 'black' // Change title color to black
            }
        },
    }
    });
}

function autoUpdateCharts() {
    const updatedSalesDataDonutRecent = [400, 300, 600]; // Replace with new data for donut chart (recent)
    const updatedSalesDataPieRecent = [700, 500, 900]; // Replace with new data for pie chart (recent)
    const updatedSalesDataBarRecent = [500, 400, 350]; // Replace with new data for bar chart (recent)
    
    const updatedSalesDataDonutPrevious = [300, 400, 500]; // Replace with new data for donut chart (previous)
    const updatedSalesDataPiePrevious = [500, 700, 600]; // Replace with new data for pie chart (previous)
    const updatedSalesDataBarPrevious = [200, 300, 250]; // Replace with new data for bar chart (previous)
    
    if (isRecent) {
        donutChart.data.datasets[0].data = updatedSalesDataDonutPrevious;
        pieChart.data.datasets[0].data = updatedSalesDataPiePrevious;
        barChart.data.datasets[0].data = updatedSalesDataBarPrevious;
    } else {
        donutChart.data.datasets[0].data = updatedSalesDataDonutRecent;
        pieChart.data.datasets[0].data = updatedSalesDataPieRecent;
        barChart.data.datasets[0].data = updatedSalesDataBarRecent;
    }
    
        donutChart.update();
        pieChart.update();
        barChart.update();
    
    isRecent = !isRecent; // Toggle the flag for the next click
    }