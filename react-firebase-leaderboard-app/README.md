# React Firebase Leaderboard App

This project is a React application that displays a leaderboard for various sports using Firebase for hosting. It features a clean and responsive UI, allowing users to view rankings in real-time.

## Project Structure

```
react-firebase-leaderboard-app
├── src
│   ├── App.tsx                # Main application component with routing
│   ├── main.tsx               # Entry point of the React application
│   ├── pages
│   │   └── LeaderboardPage.tsx # Component displaying the leaderboard
│   ├── components
│   │   └── ui
│   │       ├── avatar.tsx      # Avatar component for user profile images
│   │       ├── badge.tsx       # Badge component for labels/status indicators
│   │       ├── button.tsx      # Styled button component
│   │       ├── card.tsx        # Card component for displaying content
│   │       └── tabs.tsx        # Tabs component for navigation
│   └── assets
│       └── .gitkeep            # Keeps the assets directory in version control
├── index.html                  # Main HTML file for the application
├── package.json                # Configuration file for npm
├── tsconfig.json               # TypeScript configuration file
├── tsconfig.node.json          # Node.js specific TypeScript configuration
├── vite.config.ts              # Vite configuration file
├── firebase.json               # Firebase Hosting configuration
├── .firebaserc                 # Firebase project aliases and configurations
├── .gitignore                  # Files and directories to ignore by Git
├── .env.example                 # Template for environment variables
└── README.md                   # Documentation for the project
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-firebase-leaderboard-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Configure Firebase Hosting and add your project credentials to the `.env` file.

4. **Run the application locally:**
   ```
   npm run dev
   ```

5. **Deploy to Firebase:**
   ```
   npm run build
   firebase deploy
   ```

## Features

- Real-time leaderboard updates for various sports.
- Responsive design for mobile and desktop views.
- User-friendly interface with intuitive navigation.

## License

This project is licensed under the MIT License. See the LICENSE file for details.