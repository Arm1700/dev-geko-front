import React, {useEffect} from 'react';

const FacebookBox = ({pageUrl}) => {
    useEffect(() => {
        // Ensure Facebook SDK is loaded and initialized
        if (window.FB) {
            window.FB.XFBML.parse(); // Parse Facebook plugins once the component renders
        } else {
            // Load the Facebook SDK if it's not already loaded
            const script = document.createElement('script');
            script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0';
            script.async = true;
            script.onload = () => {
                window.FB.init({
                    appId: 850574873815687, // Replace with your Facebook app ID
                    xfbml: true,
                    version: 'v12.0',
                });
                window.FB.XFBML.parse();
            };
            document.body.appendChild(script);
        }
    }, [pageUrl]);

    return (
        <div className="facebook-box">
            {/* Facebook Page plugin with Like button inside */}
            <div className="fb-page-container" style={{position: 'relative'}}>
                {/* Facebook Page plugin */}
                <div
                    className="fb-page"
                    data-href={pageUrl}
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
                    data-href={pageUrl}
                    data-layout="button"
                    data-action="like"
                    data-size="small"
                    data-share="false"
                    style={{
                        position: 'absolute',
                        top: '18%',  // Adjust the vertical position as needed
                        left: '12.5%', // Horizontally center it
                        transform: 'translateX(-50%)', // Ensures it is perfectly centered
                    }}
                ></div>
            </div>
        </div>
    );
};

export default FacebookBox;
