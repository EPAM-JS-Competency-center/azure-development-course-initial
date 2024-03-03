import React from 'react';
import SearchBar from '@theme-original/SearchBar';

let Header = ({...props}) => <SearchBar {...props} /> // Default fallback component

if (process.env.NODE_ENV === 'production') {
    // NODE_ENV is always equal to 'production' for npm run build
    try {
        Header = require('@ebook/core').LearnHeader;
        require('@ebook/core/dist/customeStyles.css');
    } catch(e) {
        console.error('Failed to load @ebook/core:', e);
    }
}

export default function SearchBarWrapper(props) {
  return (
    <div id='learnHeader'>
      <Header {...props} />
    </div>
  );
}
