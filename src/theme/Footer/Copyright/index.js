import React from 'react';

let LearnFooter = ({ children }) => <>{children}</>; // Default fallback component

if (process.env.NODE_ENV === 'production') {
    // NODE_ENV is always equal to 'production' for npm run build
    try {
        LearnFooter = require('@ebook/core').LearnFooter;
    } catch(e) {
        console.error('Failed to load @ebook/access-epm-wrapper:', e);
    }
}



export default function CopyrightWrapper(props) {
    return (
        <LearnFooter {...props}/>
    );
}
