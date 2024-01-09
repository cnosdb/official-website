import React from 'react';
import clsx from 'clsx';
import ContactUs from '../ContactUs';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        <div className="footer-inner-box">
          <ContactUs />
          {links}
        </div>
      </div>
      <div className="footer-copyright">{copyright}</div>
    </footer>
  );
}
