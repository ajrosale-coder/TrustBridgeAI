/* ============================================================================
   TrustBridge AI - Anonymous Feedback Hub Script
   ============================================================================ */

// ============================================================================
// Mock Data
// ============================================================================

const mockSummaryUpdates = [
    {
        summary: "Faculty feedback this week shows recurring concerns about unclear communication around departmental decisions and inconsistent follow-up after meetings.",
        themes: [
            "Lack of clarity in updates",
            "Delayed communication after decisions",
            "Employees feeling unheard",
            "Confusion around next steps"
        ],
        sentimentLevel: "moderate",
        trend: "Repeated across multiple submissions",
        actions: [
            "Share a weekly decision update with faculty",
            "Clarify next steps after meetings",
            "Create a recurring space for open questions",
            "Acknowledge concerns publicly to build trust"
        ],
        quotes: [
            "It often feels like decisions are made before faculty have a chance to give input.",
            "We need clearer follow-up after meetings so people know what is actually changing.",
            "More transparency would help people trust leadership decisions."
        ]
    },
    {
        summary: "Recent submissions reveal growing frustration with meeting agendas lacking clear objectives and decisions being announced without adequate context or discussion.",
        themes: [
            "Unclear meeting objectives",
            "Decisions announced without sufficient context",
            "Lack of advance agenda sharing",
            "Insufficient discussion time",
            "Follow-up documentation missing"
        ],
        sentimentLevel: "high",
        trend: "Increasing frequency across recent weeks",
        actions: [
            "Share full meeting agendas 24 hours in advance",
            "Include context and supporting documents with agenda",
            "Reserve dedicated time for Q&A and discussion",
            "Send comprehensive meeting minutes within 24 hours",
            "Provide space for asynchronous feedback on decisions"
        ],
        quotes: [
            "Meetings feel rushed and decisions seem predetermined.",
            "It would help to know what will be discussed before we arrive.",
            "We're usually given the decision but not the reasoning behind it."
        ]
    },
    {
        summary: "Feedback indicates positive response to recent transparency initiatives, though asks for more consistency and additional channels for two-way dialogue.",
        themes: [
            "Appreciation for recent communication efforts",
            "Request for more consistent communication schedule",
            "Desire for multiple feedback channels",
            "Need for leadership visibility and accessibility",
            "Interest in more collaborative decision-making"
        ],
        sentimentLevel: "low",
        trend: "More balanced feedback with constructive suggestions",
        actions: [
            "Establish regular communication cadence (bi-weekly or monthly)",
            "Create multiple feedback channels (anonymous form, office hours, suggestion box)",
            "Increase leadership presence in department events",
            "Involve faculty in key decision-making processes early",
            "Share outcomes of implemented suggestions to close the loop"
        ],
        quotes: [
            "The recent updates were helpful—it felt good to be informed.",
            "I'd love more opportunities to voice concerns while decisions are still being made.",
            "Office hours where we could ask leadership questions directly would be great."
        ]
    }
];

let feedbackSubmissionCount = 0;

// ============================================================================
// DOM Elements
// ============================================================================

const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');
const summaryContent = document.getElementById('summaryContent');
const categorySelect = document.getElementById('category');
const urgencySelect = document.getElementById('urgency');
const feedbackTextarea = document.getElementById('feedback');
const suggestionInput = document.getElementById('suggestion');

// ============================================================================
// Event Listeners
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('TrustBridge AI - Anonymous Feedback Hub loaded');
    setupFormValidation();
});

feedbackForm.addEventListener('submit', handleFormSubmit);

// ============================================================================
// Form Handling
// ============================================================================

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        category: categorySelect.value,
        urgency: urgencySelect.value,
        feedback: feedbackTextarea.value,
        suggestion: suggestionInput.value,
        timestamp: new Date().toISOString()
    };
    
    // Validate form data
    if (!formData.category || !formData.urgency || !formData.feedback) {
        showValidationError();
        return;
    }
    
    console.log('Feedback submitted:', formData);
    
    // Simulate successful submission
    simulateSubmission(formData);
}

function simulateSubmission(formData) {
    feedbackSubmissionCount++;
    
    // Disable submit button during simulation
    const submitButton = feedbackForm.querySelector('.btn-submit');
    submitButton.disabled = true;
    submitButton.style.opacity = '0.6';
    
    // Hide any previous error messages
    const errorMessages = feedbackForm.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
    
    // Add a small delay to simulate network request
    setTimeout(() => {
        // Clear form
        feedbackForm.reset();
        
        // Show success message
        showSuccessMessage();
        
        // Update the summary panel with new mock data
        updateSummaryPanel();
        
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
        
        // Scroll to summary panel on mobile
        if (window.innerWidth < 1024) {
            summaryContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 800);
}

function showSuccessMessage() {
    // Make sure the element is visible and remove any display: none
    successMessage.style.display = 'flex';
    
    // Trigger animation
    successMessage.classList.remove('scale-in');
    void successMessage.offsetWidth; // Force reflow
    successMessage.classList.add('scale-in');
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
        successMessage.style.opacity = '0';
        successMessage.style.transition = 'opacity 300ms ease-in';
        setTimeout(() => {
            successMessage.style.display = 'none';
            successMessage.style.opacity = '1';
            successMessage.style.transition = 'none';
        }, 300);
    }, 4000);
}

function showValidationError() {
    // Remove existing error if any
    const existingError = feedbackForm.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = 'Please fill in all required fields.';
    errorDiv.style.cssText = `
        padding: var(--spacing-md) var(--spacing-lg);
        background-color: rgba(239, 68, 68, 0.1);
        border: 1px solid #FCA5A5;
        border-radius: var(--radius-md);
        color: #7F1D1D;
        font-size: var(--font-size-sm);
        margin-bottom: var(--spacing-md);
        animation: slideIn 300ms ease-out;
    `;
    
    feedbackForm.insertBefore(errorDiv, feedbackForm.firstChild);
}

function setupFormValidation() {
    // Add real-time validation visual feedback
    [categorySelect, urgencySelect, feedbackTextarea].forEach(field => {
        field.addEventListener('change', function() {
            this.style.borderColor = 'var(--color-border)';
        });
    });
}

// ============================================================================
// Summary Panel Updates
// ============================================================================

function updateSummaryPanel() {
    // Select a random update or cycle through them
    const updateIndex = feedbackSubmissionCount % mockSummaryUpdates.length;
    const newSummary = mockSummaryUpdates[updateIndex];
    
    // Create new summary content with animation
    const newContent = createSummaryHTML(newSummary);
    
    // Add animation class
    summaryContent.style.opacity = '0.7';
    summaryContent.style.transition = 'opacity 200ms ease-in';
    
    setTimeout(() => {
        summaryContent.innerHTML = newContent;
        summaryContent.style.opacity = '1';
        summaryContent.style.transition = 'opacity 300ms ease-out';
    }, 200);
}

function createSummaryHTML(summary) {
    const themesHTML = summary.themes
        .map(theme => `<li class="theme-item">${escapeHtml(theme)}</li>`)
        .join('');
    
    const actionsHTML = summary.actions
        .map(action => `<li class="action-item">${escapeHtml(action)}</li>`)
        .join('');
    
    const quotesHTML = summary.quotes
        .map(quote => `
            <div class="quote-card">
                <p class="quote-text">${escapeHtml(quote)}</p>
            </div>
        `)
        .join('');
    
    const sentimentBadgeClass = summary.sentimentLevel === 'high' ? 'sentiment-high' :
                                summary.sentimentLevel === 'low' ? 'sentiment-low' :
                                'sentiment-moderate';
    
    const sentimentDisplayText = summary.sentimentLevel === 'high' ? 'High' :
                                 summary.sentimentLevel === 'low' ? 'Low' :
                                 'Moderate to High';
    
    return `
        <div class="summary-card">
            <h4 class="summary-title">This Week's Feedback Overview</h4>
            <p class="summary-text">
                ${escapeHtml(summary.summary)}
            </p>
        </div>

        <div class="themes-section">
            <h4 class="section-title">Top Concern Themes</h4>
            <ul class="themes-list">
                ${themesHTML}
            </ul>
        </div>

        <div class="sentiment-section">
            <h4 class="section-title">Sentiment & Trend</h4>
            <div class="sentiment-item">
                <span class="sentiment-label">Concern Level:</span>
                <span class="sentiment-badge ${sentimentBadgeClass}">${sentimentDisplayText}</span>
            </div>
            <div class="sentiment-item">
                <span class="sentiment-label">Trend:</span>
                <span class="sentiment-value">${escapeHtml(summary.trend)}</span>
            </div>
        </div>

        <div class="actions-section">
            <h4 class="section-title">Suggested Actions</h4>
            <ol class="actions-list">
                ${actionsHTML}
            </ol>
        </div>

        <div class="quotes-section">
            <h4 class="section-title">Sample Anonymous Quotes</h4>
            <div class="quotes-container">
                ${quotesHTML}
            </div>
        </div>
    `;
}

// ============================================================================
// Navigation Functions
// ============================================================================

function goToDashboard() {
    console.log('Navigating to Dashboard...');
    window.location.href = 'dashboard.html';
}

function goToNextFeature() {
    console.log('Navigating to Next Feature...');
    window.location.href = 'feature2.html';
}

// ============================================================================
// Utility Functions
// ============================================================================

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ============================================================================
// Demo Enhancement: Allow keyboard shortcuts
// ============================================================================

document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to submit form
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (document.activeElement === feedbackTextarea ||
            document.activeElement === suggestionInput) {
            feedbackForm.dispatchEvent(new Event('submit'));
        }
    }
});

// ============================================================================
// Responsive Adjustments
// ============================================================================

window.addEventListener('resize', function() {
    // Adjust layout if needed for responsive changes
    if (window.innerWidth < 1024) {
        // Layout will stack thanks to CSS media queries
    }
});

console.log('TrustBridge AI - Anonymous Feedback Hub Scripts initialized');
