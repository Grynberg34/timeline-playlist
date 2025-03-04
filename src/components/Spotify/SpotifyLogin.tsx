import React from 'react';

const SpotifyLogin = () => {
  return (
    <div className="spotify__login">
      <a className="spotify__login__link" href="/api/auth/login">Log in to <img className="spotify__login__link__img" src="/spotify_logo.png" alt="" /></a>
    </div>
  );
};

export default SpotifyLogin;