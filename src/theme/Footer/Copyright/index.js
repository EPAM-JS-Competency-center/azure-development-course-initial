import React from 'react';
import Copyright from '@theme-original/Footer/Copyright';
let Footer = ({...props}) => <Copyright {...props} />;

if (process.env.NODE_ENV === 'production') {
  // NODE_ENV is always equal to 'production' for npm run build
  try {
    Footer = require('@ebook/core').LearnFooter;
  } catch(e) {
    console.error('Failed to load @ebook/core:', e);
  }
}
export default function CopyrightWrapper(props) {

  return (
    <Footer {...props} />
  );
}
