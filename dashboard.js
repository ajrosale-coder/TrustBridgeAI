/* ============================================================================
   TrustBridge AI - Dashboard Script
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('TrustBridge AI - Dashboard loaded');

    // Add click tracking for feature cards
    const featureCards = document.querySelectorAll('.feature-card:not(.coming-soon)');
    featureCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Only handle clicks on the card itself, not the button
            if (e.target.closest('.feature-btn')) {
                return; // Let the button handle the click
            }

            const link = this.querySelector('.feature-btn');
            if (link && link.tagName === 'A') {
                link.click();
            }
        });
    });

    // Add hover effects for better UX
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });

    // Animate stats on load
    animateStats();
});

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach((stat, index) => {
        setTimeout(() => {
            stat.style.opacity = '0';
            stat.style.transform = 'scale(0.8)';

            setTimeout(() => {
                stat.style.transition = 'all 0.5s ease-out';
                stat.style.opacity = '1';
                stat.style.transform = 'scale(1)';
            }, 100);
        }, index * 200);
    });
}

// ============================================================================
// Navigation Functions
// ============================================================================

function goToFirstFeature() {
    console.log('Starting demo - navigating to first feature...');
    window.location.href = 'index.html';
}

console.log('TrustBridge AI - Dashboard Scripts initialized');