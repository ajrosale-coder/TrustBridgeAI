# TrustBridge AI - Anonymous Feedback Hub

A front-end MVP demo of TrustBridge AI, a web tool designed to help higher education leaders (specifically department chairs) build trust through anonymous feedback collection and AI-organized summaries.

## Project Overview

**Problem:** Higher education leaders face significant trust gaps with faculty and staff due to inconsistent communication, lack of transparency, and limited structured feedback opportunities.

**Solution:** TrustBridge AI provides a transparent, safe environment where employees can submit anonymous feedback, which leadership can then receive as organized, actionable insights.

## Feature 2: AI Communication Summarizer

This screen helps department chairs transform complex leadership messages into clear, easy-to-understand summaries for faculty and staff. The AI simplifies jargon, clarifies intent, and makes communication more accessible.

### Key Features

- **Message Input Area**
  - Large text area for pasting leadership messages, meeting notes, or policy updates
  - Audience selection (Faculty, Staff, Faculty and Staff, Department Team)
  - Tone selection (Professional, Warm, Direct, Reassuring)
  - "Simplify Message" button with processing animation

- **AI-Generated Output**
  - Short Summary: One-sentence overview of the message
  - Simplified Version: Clear, easy-to-understand rewrite
  - Key Takeaways: 3-4 bullet points highlighting what matters most
  - Recommended Follow-Up: Suggested next steps for communication
  - "AI-generated demo output" label

- **Interactive Experience**
  - Processing animation with spinner during "AI analysis"
  - Smooth transitions when results appear
  - Different mock outputs based on audience and tone selections
  - Responsive design optimized for laptop demo

### Demo Behavior

The feature cycles through realistic mock summaries based on the selected audience and tone:

- **Faculty + Professional**: Focuses on academic policies, research support, evaluations
- **Staff + Warm**: Emphasizes team appreciation, work-life balance, development
- **Faculty & Staff + Direct**: Clear, concise operational changes
- **Department Team + Reassuring**: Builds confidence and addresses concerns

Each combination produces contextually appropriate language and content.

### Technical Implementation

- **Mock AI Logic**: Pre-written summaries for all audience/tone combinations
- **Form Validation**: Ensures message content and selections are provided
- **Processing Simulation**: 2-second delay with animated spinner
- **Dynamic Content**: Results update based on form selections
- **Keyboard Shortcut**: `Ctrl/Cmd + Enter` to simplify when in text area

## Project Structure

```
TrustBridgeAI/
├── index.html              # Feature 1: Anonymous Feedback Hub
├── script.js               # Feature 1 JavaScript
├── feature2.html           # Feature 2: AI Communication Summarizer
├── summarizer.js           # Feature 2 JavaScript
├── styles.css              # Shared CSS for both features
└── README.md              # This file
```

This is a polished, interactive front-end demo that showcases how department chairs can:

1. **Receive Anonymous Feedback** - Faculty submit structured feedback without revealing their identity
2. **View AI-Organized Summaries** - Leadership sees feedback organized by themes, concerns, and trends
3. **Get Suggested Actions** - The system provides recommendations for improving communication

### Key Features

- **Anonymous Submission Form**
  - Feedback category selection (Communication, Transparency, Leadership Decisions, etc.)
  - Urgency level indication (Low, Medium, High)
  - Detailed feedback text area with reassurance messaging
  - Optional suggested improvement input
  - Anonymity guarantee checkbox

- **Leadership Summary Preview**
  - AI-generated summary of all feedback (simulated with mock data)
  - Top concern themes extracted from submissions
  - Sentiment and trend analysis
  - Suggested actions for leadership
  - Sample anonymous quotes demonstrating common themes

- **Polished UX**
  - Design combines Slack (clean, approachable) + Notion (minimal, organized)
  - Neutral, professional color palette suitable for academic settings
  - Responsive design (optimized for laptop demo, but mobile-friendly)
  - Smooth animations and transitions
  - Clear success feedback after submission

## Technical Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with custom properties, grid layout
- **Vanilla JavaScript** - Pure interactivity, no frameworks (for simplicity in demo)
- **No Backend** - All data is front-end only with mock submissions and summaries

## How to Use

### Running the Demo

1. Open `index.html` in a modern web browser
2. The Anonymous Feedback Hub will load with the submission form and leadership summary

### Interactive Demo Flow

1. **Submit Feedback:**
   - Select a feedback category
   - Choose an urgency level
   - Write feedback in the text area
   - (Optionally) add a suggested improvement
   - Click "Submit Feedback"

2. **See Results:**
   - A success message confirms the submission
   - The right panel updates with new mock summary data
   - Each submission shows different mock AI summaries (cycles through 3 variations)

3. **Navigation:**
   - "Back to Dashboard" - Placeholder for returning to main menu
   - "Next Feature" - Placeholder for viewing next features

### Demo-Specific Behaviors

- All submissions are simulated (no backend)
- Each new submission updates the summary with different mock data
- This demonstrates how the system would work with real AI summaries
- Keyboard shortcut: `Ctrl/Cmd + Enter` to submit feedback when in text areas

## Project Structure

```
TrustBridgeAI/
├── index.html          # Main HTML structure
├── styles.css          # All styling (>800 lines)
├── script.js           # Interactivity and mock data
└── README.md          # This file
```

## Design System

### Colors
- **Primary:** Deep blue (#5B63D9) - Trust, professionalism
- **Accent:** Green (#10B981) - Positive action, trust
- **Neutral:** Grays for text and backgrounds - Academic, clean feeling
- **Status:** Amber for moderate concerns, red for high concerns

### Typography
- Clean sans-serif system font (Apple system fonts, Segoe UI, etc.)
- Clear hierarchy with 6 font size levels
- Excellent readability on all screen sizes

### Spacing & Layout
- Consistent 8px-based spacing scale
- Grid-based 2-column layout for desktop
- Single column layout for mobile (responsive)
- Ample whitespace for clarity and trust feeling

### Components
- Clean cards with subtle shadows
- Rounded corners (4-12px radius) for approachability
- Smooth transitions and animations
- Hover states for all interactive elements
- Accessible form elements with clear labels

## Features Built Out

### Form Submission
✅ All form fields functional
✅ Validation feedback
✅ Success confirmation message
✅ Form clearing after submission
✅ Keyboard shortcuts (Ctrl/Cmd + Enter)

### Summary Updates
✅ Real-time summary refresh
✅ Mock data cycling through 3 different scenarios
✅ Smooth animations during updates
✅ Responsive display on all screen sizes

### Navigation
✅ Back to Dashboard button (with demo alert)
✅ Next Feature button (with demo alert)
✅ Footer with clear action buttons

### Design Polish
✅ Professional color palette
✅ Smooth animations and transitions
✅ Responsive design (desktop/tablet/mobile)
✅ Accessibility considerations
✅ Clear visual hierarchy
✅ Trust-focused language and messaging

## Future Enhancements

When this becomes a full product:
- Replace mock data with real AI summaries
- Add backend API for storing feedback
- Implement actual authentication and role-based access
- Add data visualization (charts, graphs)
- Create export/report functionality
- Add more sophisticated AI analysis
- Build additional features (templates, action tracking, etc.)

## Design Philosophy

This demo embodies the core principles of TrustBridge AI:

1. **Safety:** Anonymous submission ensures employees feel secure
2. **Transparency:** Leadership sees organized, honest feedback
3. **Actionability:** Clear suggested actions from AI analysis
4. **Simplicity:** Clean, intuitive interface anyone can use
5. **Trust Building:** The entire experience signals trustworthiness

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes for Classroom Demo

- The demo is fully self-contained - just open `index.html`
- No internet connection required
- Submit multiple feedback entries to see the summary update
- The demo safely shows different summary variations to illustrate the system's flexibility
- Instructor can explain how this would connect to real AI and databases
- Perfect for showcasing MVP progress to stakeholders