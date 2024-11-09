import {InstagramEmbed} from "react-social-media-embed";

function InstagramPost() {
    return (
        <div>
            <h2>View Post on Instagram</h2>
            <InstagramEmbed
                url="https://www.instagram.com/p/DB16QmJOV4F/"
                captioned
            />
        </div>
    );
}

export default InstagramPost;
