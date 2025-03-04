import { NextResponse } from "next/server";

export function GET() {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
  const SCOPES = encodeURIComponent("user-read-email user-read-private user-library-read user-top-read playlist-read-private");

  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;

  return NextResponse.redirect(AUTH_URL);
}