import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ContactUs from '../ContactUs';
import ContactUsZh from '../ContactUsZh';

export default function FooterLayout({ style, links, logo, copyright }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        <div className="footer-inner-box">
          {siteConfig.baseUrl.indexOf('zh') > -1 ? (
            <ContactUsZh />
          ) : (
            <ContactUs />
          )}
          {links}
        </div>
      </div>
      <div className="footer-copyright">{copyright}</div>
    </footer>
  );
}
