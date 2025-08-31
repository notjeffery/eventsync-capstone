# EventSync (Capstone Project)

## Description
EventSync is an events discovery and coordination app that helps users find events near them, track their favorite artists, and plan attendance with friends.  

The project is being built step by step, with a focus on **mobile-first design**, responsive UI, and a smooth user flow from onboarding to event exploration.

---

## Current Progress

### Hero Page
- Gradient mesh background with floating effect  
- Branding (EventSync logo/title) with fade-in animation  
- Call-to-action button with hover animation  
- Fully responsive (mobile-first)  

### Interest Page
- Artist selection using stacked card design  
- Event category options (Sports, Music, Tech, etc.) remain as selectable buttons  
- Improved spacing between Artist and Event Category sections for better readability  
- Selection feedback with color change when an item is selected  
- “Next” button always active (choices optional — algorithm adapts to user)  

### Event Feed Page
- Fetches live events via **Ticketmaster API**  
- Displays events dynamically in a card layout  
- Responsive design for different screen sizes  
- Error handling for missing/empty API results  

---

## Planned Features (Future Milestones)
- Splash screen with branding  
- Complete onboarding flow  
- Expanded event feed tabs (**Explore, Following, For You**)  
- Event details with interactions (RSVP, Save, Share)  
- Friends & group coordination tools (invite friends, track attendance)  

---

## Tech Stack
- **Frontend:** React (Vite)  
- **Styling:** Tailwind CSS + custom CSS animations + CSS Modules  
- **API:** Ticketmaster Discovery API (future: local APIs like TixAfrica)  
- **Version Control:** Git & GitHub  

---

## Demo / Presentation
- Walkthrough of Hero → Interest → Event Feed pages  
- Demonstration of responsiveness and animations  
- Explanation of roadmap and future milestones 
- You can view the live deployed version of EventSync here: https://eventsync-two.vercel.app
. This deployment makes it easy to explore the current features, including the Hero Page with its gradient mesh background and the Interest Page with artist and category selection, directly in your browser. 
