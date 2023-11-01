import React from 'react';
import Layout from '@theme-original/Layout';

let EpamAccessWrapper = ({ children }) => <>{children}</>; // Default fallback component

if (process.env.NODE_ENV === 'production') {
    // NODE_ENV is always equal to 'production' for npm run build
    try {
        EpamAccessWrapper = require('@ebook/access-epm-wrapper').EpamAccessWrapper;
    } catch(e) {
        console.error('Failed to load @ebook/access-epm-wrapper:', e);
    }
}

export default function LayoutWrapper(props) {
    return(
        <>
            <EpamAccessWrapper>
                <Layout {...props} />
            </EpamAccessWrapper>
        </>
    );
}
