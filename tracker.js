/* ============================================================================
   TrustBridge AI - Trust and Engagement Tracker Script
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('TrustBridge AI - Trust and Engagement Tracker loaded');

    // Initialize time range selector
    initializeTimeSelector();

    // Add hover effects for metric cards
    initializeMetricCards();

    // Add chart interactions
    initializeChartInteractions();

    // Add quick action handlers
    initializeQuickActions();
});

function initializeTimeSelector() {
    const timeButtons = document.querySelectorAll('.time-btn');

    timeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            timeButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Update data based on selected time period
            const period = this.dataset.period;
            updateDataForPeriod(period);
        });
    });
}

function updateDataForPeriod(period) {
    // Mock data updates based on time period
    const periodData = {
        weekly: {
            trustScore: 72,
            engagement: 'Moderate',
            feedbackVolume: 18,
            responseTrend: 'Positive',
            concerns: [
                { title: 'Communication Clarity', count: 8, percentage: 44, status: 'attention' },
                { title: 'Follow-up After Meetings', count: 6, percentage: 33, status: 'improving' },
                { title: 'Decision Transparency', count: 5, percentage: 28, status: 'stable' },
                { title: 'Employee Voice & Input', count: 4, percentage: 22, status: 'improving' }
            ]
        },
        monthly: {
            trustScore: 68,
            engagement: 'Moderate',
            feedbackVolume: 67,
            responseTrend: 'Improving',
            concerns: [
                { title: 'Communication Clarity', count: 24, percentage: 36, status: 'attention' },
                { title: 'Follow-up After Meetings', count: 18, percentage: 27, status: 'improving' },
                { title: 'Decision Transparency', count: 15, percentage: 22, status: 'stable' },
                { title: 'Employee Voice & Input', count: 10, percentage: 15, status: 'improving' }
            ]
        },
        semester: {
            trustScore: 65,
            engagement: 'Low to Moderate',
            feedbackVolume: 234,
            responseTrend: 'Stable',
            concerns: [
                { title: 'Communication Clarity', count: 89, percentage: 38, status: 'attention' },
                { title: 'Follow-up After Meetings', count: 67, percentage: 29, status: 'stable' },
                { title: 'Decision Transparency', count: 45, percentage: 19, status: 'improving' },
                { title: 'Employee Voice & Input', count: 33, percentage: 14, status: 'improving' }
            ]
        }
    };

    const data = periodData[period];
    if (!data) return;

    // Update metrics
    updateMetrics(data);

    // Update concerns
    updateConcerns(data.concerns);

    // Update chart (mock animation)
    animateChartUpdate();
}

function updateMetrics(data) {
    // Update trust score
    const trustCard = document.querySelector('.metric-card:nth-child(1)');
    trustCard.querySelector('.metric-value').textContent = data.trustScore + '%';
    trustCard.querySelector('.metric-bar-fill').style.width = data.trustScore + '%';

    // Update engagement
    const engagementCard = document.querySelector('.metric-card:nth-child(2)');
    engagementCard.querySelector('.metric-value').textContent = data.engagement;

    // Update feedback volume
    const feedbackCard = document.querySelector('.metric-card:nth-child(3)');
    feedbackCard.querySelector('.metric-value').textContent = data.feedbackVolume;

    // Update response trend
    const trendCard = document.querySelector('.metric-card:nth-child(4)');
    trendCard.querySelector('.metric-value').textContent = data.responseTrend;
}

function updateConcerns(concerns) {
    const concernItems = document.querySelectorAll('.concern-item');

    concerns.forEach((concern, index) => {
        if (concernItems[index]) {
            const item = concernItems[index];
            item.querySelector('.concern-count').textContent = concern.count + ' mentions';
            item.querySelector('.concern-bar-fill').style.width = concern.percentage + '%';
            item.querySelector('.concern-status').textContent = getStatusText(concern.status);
            item.querySelector('.concern-status').className = `concern-status status-${concern.status}`;
        }
    });
}

function getStatusText(status) {
    const statusMap = {
        'improving': 'Improving',
        'attention': 'Needs Attention',
        'stable': 'Stable'
    };
    return statusMap[status] || 'Unknown';
}

function animateChartUpdate() {
    const chartBars = document.querySelectorAll('.chart-bar');

    // Add loading animation
    chartBars.forEach(bar => {
        bar.style.opacity = '0.5';
    });

    setTimeout(() => {
        chartBars.forEach(bar => {
            bar.style.opacity = '1';
        });
    }, 300);
}

function initializeMetricCards() {
    const metricCards = document.querySelectorAll('.metric-card');

    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });
}

function initializeChartInteractions() {
    const chartBarGroups = document.querySelectorAll('.chart-bar-group');

    chartBarGroups.forEach(group => {
        group.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });

        group.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
}

function initializeQuickActions() {
    // Quick action functions are defined below
}

function generateReport() {
    alert('📊 Report Generation\n\nGenerating comprehensive trust and engagement report...\n\nThis would create a detailed PDF report with:\n- Executive summary\n- Trend analysis\n- Key insights\n- Action recommendations\n- Historical data\n\nReport generated successfully! (Demo)');
}

function scheduleCheckin() {
    alert('📅 Schedule Check-in\n\nOpening scheduling interface...\n\nThis would allow you to:\n- Schedule team check-in meetings\n- Set recurring feedback sessions\n- Plan communication touchpoints\n- Create action item follow-ups\n\nCheck-in scheduled for next week! (Demo)');
}

function shareInsights() {
    alert('📤 Share Insights\n\nOpening sharing options...\n\nThis would allow you to:\n- Share insights with department leadership\n- Export data for presentations\n- Send summaries to faculty/staff\n- Create stakeholder reports\n\nInsights shared successfully! (Demo)');
}

function viewRecommendations() {
    alert('💡 View All Recommendations\n\nOpening recommendations dashboard...\n\nThis would show:\n- Detailed action plans\n- Priority recommendations\n- Implementation timelines\n- Success metrics\n- Progress tracking\n\nAll recommendations displayed! (Demo)');
}

// ============================================================================
// Navigation Functions
// ============================================================================

function goToDashboard() {
    console.log('Navigating to Dashboard...');
    window.location.href = 'dashboard.html';
}

function goToPreviousFeature() {
    console.log('Navigating to Previous Feature...');
    window.location.href = 'feature2.html';
}

function goToNextFeature() {
    console.log('Navigating to First Feature (cycling demo)...');
    window.location.href = 'index.html';
}

// ============================================================================
// Demo Enhancement: Auto-refresh simulation
// ============================================================================

// Simulate real-time updates (for demo purposes)
setInterval(() => {
    // Randomly update a metric occasionally (very subtle)
    if (Math.random() < 0.1) { // 10% chance every 30 seconds
        const metrics = document.querySelectorAll('.metric-value');
        const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];

        // Add a subtle pulse effect
        randomMetric.style.transition = 'all 0.3s ease';
        randomMetric.style.transform = 'scale(1.05)';

        setTimeout(() => {
            randomMetric.style.transform = 'scale(1)';
        }, 300);
    }
}, 30000);

console.log('TrustBridge AI - Trust and Engagement Tracker Scripts initialized');