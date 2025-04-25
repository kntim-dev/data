// Animated Gradient Background
const canvas = document.getElementById('gradient-canvas');
const ctx = canvas.getContext('2d');

let time = 0;

const drawGradient = () => {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, `hsl(${time % 360}, 70%, 50%)`);
    gradient.addColorStop(1, `hsl(${(time + 120) % 360}, 70%, 50%)`);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    time += 0.5;
    requestAnimationFrame(drawGradient);
};

// Initialize Canvas Size
const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Initialize Animations
drawGradient();

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-card, .animate-progress');
    
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            el.style.animationPlayState = 'running';
            
            if(el.classList.contains('animate-progress')) {
                el.querySelector('.progress-bar').style.width = el.querySelector('.progress-bar').style.width;
            }
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Initialize Charts
const initCharts = () => {
    // Mining Cost Reduction Chart
    const miningData = [{
        x: ['Q1', 'Q2', 'Q3', 'Q4'],
        y: [120, 95, 85, 75],
        type: 'scatter',
        line: {color: '#2EC4B6'}
    }];
    
    const miningLayout = {
        title: 'Quarterly Cost Reduction',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {color: '#fff'}
    };
    
    Plotly.newPlot('mining-chart', miningData, miningLayout);

    // Retail Sales Chart
    const retailData = [{
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        y: [45, 68, 72, 89, 95],
        type: 'bar',
        marker: {color: '#FF9F1C'}
    }];
    
    Plotly.newPlot('retail-chart', retailData, miningLayout);
};

document.addEventListener('DOMContentLoaded', initCharts);
