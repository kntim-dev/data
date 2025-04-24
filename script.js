// Dashboard Data and Configuration
const generateSalesData = (region) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
        x: months,
        y: months.map(() => Math.floor(Math.random() * 50000) + 10000),
        type: 'scatter',
        line: {color: '#00f3ff'},
        name: region
    };
};

// Initialize Sales Dashboard
const initSalesDashboard = () => {
    const data = [
        generateSalesData('North'),
        generateSalesData('South')
    ];
    
    const layout = {
        title: 'Regional Sales Performance',
        plot_bgcolor: 'rgba(0,0,0,0)',
        paper_bgcolor: 'rgba(0,0,0,0)',
        font: {color: '#fff'},
        xaxis: {gridcolor: 'rgba(255,255,255,0.1)'},
        yaxis: {gridcolor: 'rgba(255,255,255,0.1)'}
    };
    
    Plotly.newPlot('sales-chart', data, layout);
};

// Tab Functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and content
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.dashboard-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const dashboardId = btn.dataset.dashboard;
        document.getElementById(`${dashboardId}-dash`).classList.add('active');
    });
});

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        // Add filter logic here
        console.log(`Filtering by: ${filter}`);
    });
});

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    initSalesDashboard();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});