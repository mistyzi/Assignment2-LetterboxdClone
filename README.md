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
- Consistent SafeAreaView usage across screens
- Sticky headers for top bars

Some screens (Lists, Journal, Reviews, Diary, Watchlist, You, Incoming,) intentionally do not work.
