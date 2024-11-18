import React, { useEffect } from 'react';

const FacebookBox = () => {
    useEffect(() => {
        // Check if Facebook SDK is already loaded
        if (!window.FB) {
            const script = document.createElement('script');
            script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0';
            script.async = true;
            script.defer = true;
            // Remove crossOrigin to avoid CORS issues with Facebook SDK
            script.onload = () => {
                // Initialize the Facebook SDK
                window.FB.init({
                    appId: '1263217894882530',  // Replace with your Facebook app ID
                    cookie: true,
                    xfbml: true,
                    version: 'v21.0',
                });
                // Parse any XFBML elements (like the fb-page) after loading the SDK
                window.FB.XFBML.parse();

            };
            script.onerror = () => {
                console.error('Error loading the Facebook SDK.');
            };
            document.body.appendChild(script);
        } else {
            // If the SDK is already loaded, re-parse the XFBML elements
            window.FB.XFBML.parse();
        }
    }, []);  // Empty dependency array ensures this effect runs once on mount

    return (
        <div className="facebook-box">
            {/* Facebook Page plugin with Like button inside */}
            <div className="fb-page-container" style={{ position: 'relative' }}>
                <div
                    className="fb-page"
                    data-href="https://www.facebook.com/GekoOnlineEducation"  // Facebook page URL to display
                    data-tabs="timeline"
                    data-width="380"
                    data-height="400"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                ></div>

                {/* Facebook Like button inside the page plugin */}
                <div
                    className="fb-like"
                    data-href="https://www.facebook.com/GekoOnlineEducation"
                    data-layout="button"
                    data-action="like"
                    data-size="small"
                    data-share="false"
                    style={{
                        position: 'absolute',
                        top: '18%',  // Adjust the vertical position as needed
                        left: '16.5%', // Horizontally center it
                        transform: 'translateX(-50%)', // Ensures it is perfectly centered
                    }}
                ></div>
            </div>
        </div>
    );
};

export default FacebookBox;
