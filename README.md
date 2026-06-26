# Letterboxd‑Style Mobile App  
A multi‑screen React Native app built with Expo, inspired by the design and layout of Letterboxd.  
This project includes custom top bars, tab navigation, profile layout, activity feed, and themed UI components.

---

## Features

### Navigation
- Multi‑page navigation using **React Navigation**
- Screens include:
  - Home
  - Profile
  - Activity
  - Movie Details
  - Search
  - Create (PlaceHolder)

### UI & Styling
- Fully custom **Letterboxd‑inspired** design
- Dark theme using:
  - `#14181C` (main background)
  - `#1A1A1A` (card + tab background)
  - `#2A2F35` (dividers)
- Reusable top bar components:
  - `HomeTopBar`
  - `ProfileTopBar`
  - `ActivityTopBar`
- Rounded tab bars with active/inactive states
- Grey activity cards for clean feed layout

### Components
- **PageTopBars/**
  - `HomeBar.tsx`
  - `ProfileBar.tsx`
  - `ActivityBar.tsx`
- **Activity Feed**
  - Icons for likes, ratings, and watches
  - Styled cards for each activity item

### Placeholder Screens
Used for incomplete pages required by the assignment:
- Diary
- Lists
- Watchlist  
Each uses a simple “Coming Soon” placeholder screen.
