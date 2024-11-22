import { useEffect } from 'react';

const FacebookBox = () => {
    useEffect(() => {
        const initializeFB = () => {
            if (window.FB) {
                window.FB.XFBML.parse();
            } else {
                console.warn('Facebook SDK не загружен.');
            }
        };

        // Ждём загрузки SDK
        if (!window.fbAsyncInit) {
            window.fbAsyncInit = function () {
                initializeFB();
            };
        } else {
            initializeFB();
        }
    }, []);

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
                        top: '15%',  // Adjust the vertical position as needed
                        left: '11%', // Horizontally center it
                        transform: 'translateX(-50%)', // Ensures it is perfectly centered
                    }}
                ></div>
            </div>
        </div>
    );
};

export default FacebookBox;
