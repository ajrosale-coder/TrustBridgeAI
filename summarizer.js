/* ============================================================================
   TrustBridge AI - AI Communication Summarizer Script
   ============================================================================ */

// ============================================================================
// Mock AI Summaries
// ============================================================================

const mockSummaries = {
    faculty: {
        professional: {
            shortSummary: "This update outlines new faculty evaluation procedures and research support initiatives for the upcoming academic year.",
            simplifiedVersion: `Dear Faculty,

We are implementing updated procedures for faculty evaluations and research support. These changes are designed to provide clearer guidelines and better resources for your academic work.

Key updates include:
- Revised evaluation criteria that emphasize teaching excellence and research impact
- New research funding opportunities through departmental grants
- Enhanced support for grant writing and publication assistance
- Streamlined processes for sabbatical and leave requests

These improvements will take effect at the beginning of the next academic year. We believe these changes will better support your professional development and research goals.

Thank you for your dedication to our academic mission.`,
            keyTakeaways: [
                "Updated faculty evaluation criteria emphasizing teaching and research excellence",
                "New departmental grant opportunities for research funding",
                "Enhanced support services for grant writing and publications",
                "Streamlined sabbatical and leave request processes"
            ],
            recommendedFollowup: "Share this summary during the next faculty meeting and provide the full policy document via email. Schedule individual consultations for faculty who have questions about the evaluation criteria."
        },
        warm: {
            shortSummary: "We're excited to share new opportunities and support for faculty development and research excellence.",
            simplifiedVersion: `Dear Colleagues,

We're thrilled to announce some wonderful new opportunities to support your work and growth as faculty members. These changes come from listening to your feedback and wanting to create the best possible environment for teaching and research.

Here's what's new:
- We've updated our evaluation process to better recognize the amazing work you do every day
- There are new funding opportunities available for your research projects
- We're expanding our support team to help with grants and publications
- We've made it easier to request time off for research or personal needs

These changes start next academic year, and we're here to support you every step of the way. Your success is our success, and we're committed to helping you thrive.

Thank you for your incredible dedication to our students and our mission.`,
            keyTakeaways: [
                "Updated evaluation process that better recognizes faculty contributions",
                "New research funding opportunities through departmental grants",
                "Expanded support for grant writing and academic publishing",
                "Simplified processes for sabbaticals and research leave"
            ],
            recommendedFollowup: "Share this during our next faculty gathering and let's celebrate these positive changes together. I'll be available for coffee chats to discuss how these changes affect you personally."
        },
        direct: {
            shortSummary: "New faculty procedures and resources effective next academic year.",
            simplifiedVersion: `Faculty,

New procedures and resources are now in place:

Evaluation Criteria:
- Updated to focus on teaching effectiveness and research output
- Clearer expectations and timelines
- More frequent feedback opportunities

Research Support:
- New departmental grant program
- Dedicated grant writing assistance
- Publication support services
- Streamlined sabbatical process

Implementation begins next academic year. Contact your department chair with questions.

These changes improve faculty support and development.`,
            keyTakeaways: [
                "Updated evaluation criteria with clearer expectations",
                "New departmental grant program for research funding",
                "Dedicated support for grant writing and publications",
                "Streamlined sabbatical and leave processes"
            ],
            recommendedFollowup: "Distribute full policy documents via email. Schedule brief Q&A sessions for faculty with specific questions. Monitor implementation and gather feedback after first semester."
        },
        reassuring: {
            shortSummary: "We're strengthening our support for faculty success with new procedures and resources.",
            simplifiedVersion: `Dear Faculty,

We want you to know that we're committed to your success and well-being. That's why we're introducing these new procedures and resources to better support your important work.

What this means for you:
- Our evaluation process now better reflects the valuable contributions you make
- New funding is available to support your research interests
- We're here to help with grant applications and getting your work published
- We've made it easier to take the time you need for research or rest

These changes are designed with your needs in mind, and we're confident they'll make your work easier and more rewarding. We're here to support you through the transition and answer any questions you might have.

Your department leadership is committed to your success.`,
            keyTakeaways: [
                "Evaluation process redesigned to better support faculty goals",
                "Additional research funding available through new grants",
                "Expanded support services for academic career development",
                "Simplified processes for research leave and sabbaticals"
            ],
            recommendedFollowup: "Share this message personally and offer individual meetings to discuss concerns. Create an FAQ document addressing common questions about the changes."
        }
    },
    staff: {
        professional: {
            shortSummary: "This update details new staff development opportunities and operational improvements.",
            simplifiedVersion: `Dear Staff,

We are pleased to announce new initiatives to support staff development and improve our departmental operations.

Key improvements include:
- Expanded professional development training opportunities
- New career advancement pathways within the department
- Enhanced work-life balance policies
- Updated technology and tools for daily operations
- Recognition program for outstanding contributions

These enhancements will be implemented over the coming months. We value your contributions to our department's success and are committed to supporting your professional growth.

Thank you for your dedication to our mission.`,
            keyTakeaways: [
                "Expanded professional development and training opportunities",
                "New career advancement pathways for staff members",
                "Enhanced work-life balance policies and support",
                "Updated technology tools to improve daily operations"
            ],
            recommendedFollowup: "Share this summary in the staff newsletter and schedule informational sessions. Create a timeline for implementation and communicate progress regularly."
        },
        warm: {
            shortSummary: "We're excited to share new opportunities to support your growth and make your work even better.",
            simplifiedVersion: `Dear Team,

We're so grateful for everything you do to keep our department running smoothly. That's why we're introducing these new opportunities and improvements to support you and make your work more rewarding.

Here's what's coming:
- More training and development opportunities to help you grow in your career
- New ways to advance and take on more responsibility
- Better support for work-life balance
- New tools and technology to make your daily tasks easier
- A program to recognize and celebrate your great work

These changes are all about showing how much we value you and want to support your success. We're here to help you make the most of these opportunities.

Thank you for being such an important part of our team.`,
            keyTakeaways: [
                "New training opportunities to support career growth",
                "Career advancement pathways within the department",
                "Improved work-life balance support and policies",
                "New technology tools to streamline daily work"
            ],
            recommendedFollowup: "Let's celebrate these changes at our next team meeting! I'll be available to discuss how these improvements can benefit you personally."
        },
        direct: {
            shortSummary: "New staff development and operational improvements effective soon.",
            simplifiedVersion: `Staff,

New initiatives for staff development and operations:

Professional Development:
- Expanded training programs
- Career advancement opportunities
- Skills development workshops

Work Environment:
- Enhanced work-life balance policies
- Updated technology tools
- Recognition program

Implementation begins in coming months. Contact supervisor with questions.

These changes improve staff support and departmental operations.`,
            keyTakeaways: [
                "Expanded training and professional development programs",
                "New career advancement opportunities available",
                "Enhanced work-life balance policies implemented",
                "Updated technology tools for improved efficiency"
            ],
            recommendedFollowup: "Email detailed implementation timeline. Schedule brief departmental meetings for questions. Monitor feedback and adjust as needed."
        },
        reassuring: {
            shortSummary: "We're strengthening our commitment to staff development and well-being.",
            simplifiedVersion: `Dear Staff,

We want you to know how much we appreciate your hard work and dedication. That's why we're making these important improvements to better support you and create a more positive work environment.

What this means for you:
- More opportunities to learn new skills and grow in your career
- Clearer paths for advancement and taking on new challenges
- Better support for balancing work and personal life
- New tools to make your daily work easier and more efficient
- Ways to recognize and celebrate your contributions

These changes are designed to show our commitment to your well-being and success. We're here to support you through any changes and answer your questions.

Your department leadership values you greatly.`,
            keyTakeaways: [
                "Enhanced professional development opportunities",
                "Clear career advancement pathways established",
                "Improved work-life balance support and policies",
                "New technology tools to improve work efficiency"
            ],
            recommendedFollowup: "Share this message personally and offer one-on-one discussions. Create a feedback mechanism to ensure these changes meet your needs."
        }
    },
    'faculty-staff': {
        professional: {
            shortSummary: "This update covers departmental changes affecting both faculty and staff operations.",
            simplifiedVersion: `Dear Faculty and Staff,

We are implementing several important changes to improve our departmental operations and support for all team members.

Key updates include:
- Unified communication protocols for better information sharing
- New collaborative tools for cross-functional work
- Enhanced professional development opportunities for all
- Updated policies for remote work and flexible scheduling
- Recognition programs for outstanding contributions

These changes will be rolled out over the next quarter. We are committed to clear communication throughout the implementation process.

Thank you for your continued dedication to our shared mission.`,
            keyTakeaways: [
                "Unified communication protocols for better information flow",
                "New collaborative tools for faculty-staff teamwork",
                "Enhanced professional development for all team members",
                "Updated policies for flexible work arrangements"
            ],
            recommendedFollowup: "Share this summary through multiple channels (email, department meetings, intranet). Schedule joint faculty-staff sessions to discuss implementation."
        },
        warm: {
            shortSummary: "We're bringing our team closer together with new ways to collaborate and support each other.",
            simplifiedVersion: `Dear Team,

We're excited to share some changes that will help us work better together as a department. These updates come from listening to your feedback and wanting to create a more connected and supportive environment.

Here's what's new:
- Better ways for faculty and staff to communicate and share information
- New tools to make collaboration easier and more fun
- More opportunities for everyone to learn and grow
- Flexible work options that work for your life
- Ways to celebrate our team's successes together

These changes are about bringing us closer as a team and supporting each other's success. We're all in this together, and we're committed to making our department a great place to work.

Thank you for being such an amazing team.`,
            keyTakeaways: [
                "Improved communication between faculty and staff",
                "New collaborative tools for better teamwork",
                "Professional development opportunities for everyone",
                "Flexible work policies to support work-life balance"
            ],
            recommendedFollowup: "Let's discuss these changes at our next all-department meeting. I'm looking forward to hearing your thoughts and ideas!"
        },
        direct: {
            shortSummary: "Departmental changes for improved faculty-staff collaboration.",
            simplifiedVersion: `Faculty and Staff,

New departmental initiatives:

Communication:
- Unified protocols for information sharing
- Regular cross-functional updates
- Clear escalation procedures

Collaboration:
- New shared tools and platforms
- Joint professional development
- Flexible work policies

Implementation begins next quarter. Contact department chair with questions.

These changes improve departmental collaboration and operations.`,
            keyTakeaways: [
                "Unified communication protocols implemented",
                "New collaborative tools for faculty-staff work",
                "Joint professional development opportunities",
                "Flexible work policies for all team members"
            ],
            recommendedFollowup: "Distribute detailed implementation guides. Schedule brief Q&A sessions. Establish feedback channels for ongoing improvements."
        },
        reassuring: {
            shortSummary: "We're strengthening our department community with better collaboration and support.",
            simplifiedVersion: `Dear Faculty and Staff,

We recognize that our department's success depends on all of us working together effectively. That's why we're introducing these changes to improve our collaboration and support for everyone.

What this means for our team:
- Better communication channels so information flows more freely
- New tools to make it easier for faculty and staff to work together
- More opportunities for professional growth for everyone
- Flexible work options that respect your individual needs
- Ways to recognize and celebrate our collective achievements

These changes are designed to strengthen our department community and ensure everyone feels supported. We're committed to making this transition smooth and addressing any concerns that arise.

Your department leadership is here to support you.`,
            keyTakeaways: [
                "Improved communication channels for better information flow",
                "New collaborative tools to enhance faculty-staff teamwork",
                "Expanded professional development for all team members",
                "Flexible work policies to accommodate individual needs"
            ],
            recommendedFollowup: "Share this through personal communications and offer small group discussions. Create ongoing feedback mechanisms to ensure these changes serve our community well."
        }
    },
    department: {
        professional: {
            shortSummary: "This update details strategic initiatives and operational improvements for our department team.",
            simplifiedVersion: `Dear Department Team,

We are implementing strategic initiatives to enhance our departmental effectiveness and team collaboration.

Key strategic initiatives:
- Enhanced cross-functional communication protocols
- New performance metrics and goal alignment
- Professional development investment plan
- Technology upgrades for improved efficiency
- Team recognition and morale programs

These initiatives will be implemented over the next six months with clear milestones and regular progress updates.

We are committed to transparent communication and inclusive decision-making throughout this process.

Thank you for your dedication to our departmental excellence.`,
            keyTakeaways: [
                "Strategic initiatives for improved departmental effectiveness",
                "Enhanced communication and collaboration protocols",
                "New performance metrics aligned with departmental goals",
                "Investment in professional development and technology"
            ],
            recommendedFollowup: "Present detailed implementation plan at next department meeting. Establish regular progress updates and feedback sessions."
        },
        warm: {
            shortSummary: "We're excited to share our plans for making our department even stronger and more connected.",
            simplifiedVersion: `Dear Department Team,

We're thrilled to share our vision for taking our department to the next level. These initiatives come from our shared commitment to excellence and our desire to create an even better environment for everyone.

Here's what we're working on:
- Better ways for all of us to communicate and collaborate
- Clear goals and ways to measure our success together
- Investments in your professional growth and development
- New technology to make our work easier and more efficient
- Programs to celebrate our team's achievements and build morale

We're in this together, and we're committed to making these changes in ways that support you and our shared mission. Your input and feedback are invaluable as we move forward.

Thank you for being part of such an amazing team.`,
            keyTakeaways: [
                "Strategic initiatives to strengthen our department",
                "Improved communication and collaboration across teams",
                "Clear performance goals and success metrics",
                "Investments in professional development and technology"
            ],
            recommendedFollowup: "Let's discuss these initiatives at our next team meeting and hear your thoughts. I'm excited to work together on making these changes successful!"
        },
        direct: {
            shortSummary: "Department strategic initiatives and operational improvements.",
            simplifiedVersion: `Department Team,

Strategic initiatives for departmental improvement:

Communication & Collaboration:
- Enhanced cross-functional protocols
- New performance metrics
- Regular progress updates

Development & Technology:
- Professional development investment
- Technology upgrades
- Team recognition programs

Implementation: Next 6 months with milestones.

Contact leadership with questions.

These initiatives strengthen departmental operations.`,
            keyTakeaways: [
                "Strategic initiatives for departmental improvement",
                "Enhanced communication and collaboration protocols",
                "New performance metrics and goal alignment",
                "Technology and professional development investments"
            ],
            recommendedFollowup: "Distribute detailed implementation timeline. Schedule progress review meetings. Establish clear accountability and feedback mechanisms."
        },
        reassuring: {
            shortSummary: "We're strengthening our department foundation with strategic initiatives and team support.",
            simplifiedVersion: `Dear Department Team,

We want you to know that we're committed to building a stronger, more effective department that supports everyone. That's why we're implementing these strategic initiatives with careful planning and your input.

What this means for us:
- Better communication and collaboration across all areas
- Clear goals and ways to measure our progress together
- Investments in your professional growth and well-being
- Technology improvements to make our work more efficient
- Programs to recognize and celebrate our team's successes

These initiatives are designed to strengthen our department while ensuring we support each other through the changes. We're committed to transparent communication and addressing concerns as they arise.

Your department leadership values your contributions greatly.`,
            keyTakeaways: [
                "Strategic initiatives to build departmental strength",
                "Enhanced communication and collaboration protocols",
                "Clear performance goals and success metrics",
                "Investments in team development and technology"
            ],
            recommendedFollowup: "Share detailed plans and offer individual discussions. Create feedback channels to ensure these initiatives meet our team's needs and support our shared goals."
        }
    }
};

// ============================================================================
// DOM Elements
// ============================================================================

const summarizerForm = document.getElementById('summarizerForm');
const processingMessage = document.getElementById('processingMessage');
const summaryOutput = document.getElementById('summaryOutput');
const emptyState = document.getElementById('emptyState');
const originalMessage = document.getElementById('originalMessage');
const audienceSelect = document.getElementById('audience');
const toneSelect = document.getElementById('tone');

// ============================================================================
// Event Listeners
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('TrustBridge AI - AI Communication Summarizer loaded');
    setupFormValidation();
});

summarizerForm.addEventListener('submit', handleFormSubmit);

// ============================================================================
// Form Handling
// ============================================================================

function handleFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const formData = {
        message: originalMessage.value.trim(),
        audience: audienceSelect.value,
        tone: toneSelect.value
    };

    // Validate form data
    if (!formData.message || !formData.audience || !formData.tone) {
        showValidationError();
        return;
    }

    console.log('Message simplification requested:', formData);

    // Simulate AI processing
    simulateAIProcessing(formData);
}

function simulateAIProcessing(formData) {
    // Disable form during processing
    setFormDisabled(true);

    // Show processing message
    processingMessage.style.display = 'flex';
    emptyState.style.display = 'none';
    summaryOutput.style.display = 'none';

    // Add animation
    processingMessage.classList.remove('scale-in');
    void processingMessage.offsetWidth; // Force reflow
    processingMessage.classList.add('scale-in');

    // Simulate processing delay
    setTimeout(() => {
        // Generate mock summary
        const summary = generateMockSummary(formData);

        // Update the output
        updateSummaryOutput(summary);

        // Hide processing, show results
        processingMessage.style.display = 'none';
        summaryOutput.style.display = 'block';

        // Add animation to results
        summaryOutput.classList.remove('fade-in');
        void summaryOutput.offsetWidth; // Force reflow
        summaryOutput.classList.add('fade-in');

        // Re-enable form
        setFormDisabled(false);

        // Scroll to results on mobile
        if (window.innerWidth < 1024) {
            summaryOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 2000);
}

function generateMockSummary(formData) {
    // Get the appropriate mock summary based on audience and tone
    const audienceData = mockSummaries[formData.audience];
    if (!audienceData) {
        return mockSummaries['faculty-staff']['professional']; // fallback
    }

    const toneData = audienceData[formData.tone];
    if (!toneData) {
        return audienceData['professional']; // fallback
    }

    return toneData;
}

function updateSummaryOutput(summary) {
    // Update short summary
    document.getElementById('shortSummary').textContent = summary.shortSummary;

    // Update simplified version
    document.getElementById('simplifiedVersion').innerHTML = summary.simplifiedVersion.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');

    // Update key takeaways
    const takeawaysList = document.getElementById('keyTakeaways');
    takeawaysList.innerHTML = summary.keyTakeaways
        .map(takeaway => `<li class="takeaway-item">${escapeHtml(takeaway)}</li>`)
        .join('');

    // Update recommended follow-up
    document.getElementById('recommendedFollowup').textContent = summary.recommendedFollowup;
}

function setFormDisabled(disabled) {
    const inputs = summarizerForm.querySelectorAll('input, textarea, select, button');
    inputs.forEach(input => {
        input.disabled = disabled;
    });

    if (disabled) {
        summarizerForm.classList.add('form-disabled');
    } else {
        summarizerForm.classList.remove('form-disabled');
    }
}

function showValidationError() {
    // Remove existing error if any
    const existingError = summarizerForm.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = 'Please fill in all required fields and enter a message to simplify.';
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

    summarizerForm.insertBefore(errorDiv, summarizerForm.firstChild);
}

function setupFormValidation() {
    // Add real-time validation visual feedback
    [originalMessage, audienceSelect, toneSelect].forEach(field => {
        field.addEventListener('change', function() {
            this.style.borderColor = 'var(--color-border)';
        });
    });

    // Auto-resize textarea
    originalMessage.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
}

// ============================================================================
// Navigation Functions
// ============================================================================

function goToDashboard() {
    console.log('Navigating to Dashboard...');
    alert('Dashboard feature coming soon!\n\nIn a real app, this would return you to the main dashboard.');
}

function goToPreviousFeature() {
    console.log('Navigating to Previous Feature...');
    window.location.href = 'index.html';
}

function goToNextFeature() {
    console.log('Navigating to Next Feature...');
    alert('Next feature coming soon!\n\nTrustBridge AI will soon include additional features such as:\n- Action Item Tracking\n- Communication Templates\n- Faculty Engagement Analytics\n- Leadership Response Planning');
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
// Demo Enhancement: Keyboard shortcuts
// ============================================================================

document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to submit form
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (document.activeElement === originalMessage) {
            summarizerForm.dispatchEvent(new Event('submit'));
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

console.log('TrustBridge AI - AI Communication Summarizer Scripts initialized');
