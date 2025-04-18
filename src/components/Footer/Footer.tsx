import React from 'react';
import Link from 'next/link';

const Footer = () => {

  return (
    <div className='footer'>

        <Link className='footer__link' href="/legal">Terms of Service & Privacy Policy</Link>

    </div>
  );
};

export default Footer;