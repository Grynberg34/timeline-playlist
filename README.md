# The Timeline Playlist

The Timeline Playlist is a **React + Next.js + TypeScript** web application that allows users to create and add a custom playlist to their Spotify profile. By selecting a timeline (from **1950 to 2025**) and genres, the app generates a playlist with **one song per year** from the chosen range.

## Features
- **Spotify API Integration**: Authenticate users and create playlists in their Spotify accounts.
- **Custom Playlists**: Users select a time range and genres to generate a unique playlist.
- **Modern UI**: Built with Next.js for fast rendering and a smooth and responsive user experience.

## Tech Stack
- **Next.js** – Server-side rendering and optimized performance.
- **React** – Component-based UI development.
- **TypeScript** – Ensures type safety and maintainability.
- **Spotify Web API** – Fetches and manages user playlists.
- **Redux** – Global state management.
- **Sass** – Modular and maintainable styling.

## Live Demo
Check out the live version of The Timeline Playlist: https://timeline-playlist-8j27p.ondigitalocean.app/

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Grynberg34/timeline-playlist
   cd the-timeline-playlist
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env.local` file and add your Spotify API credentials:
   ```sh
   NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/api/auth/callback
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Log in with your **Spotify** account.
2. Select a **timeline** (years from 1950 to 2025) and preferred **genres**.
3. Generate a playlist with **one song per year**.
4. The playlist is saved directly to your **Spotify profile**.

## Deployment
To deploy manually:
   ```sh
   npm run build
   npm start
   ```

## License
This project is licensed under the **MIT License**.