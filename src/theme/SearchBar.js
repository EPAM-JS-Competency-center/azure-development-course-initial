import React from 'react';
let LearnHeader = ({ children }) => <>{children}</>; // Default fallback component

if (process.env.NODE_ENV === 'production') {
    // NODE_ENV is always equal to 'production' for npm run build
    try {
        LearnHeader = require('@ebook/core').LearnHeader;
    } catch(e) {
        console.error('Failed to load @ebook/access-epm-wrapper:', e);
    }
}


export default function SearchBarWrapper(props) {

    return (
        <div id='learnHeader'>
            <LearnHeader />
        </div>
    );
}
