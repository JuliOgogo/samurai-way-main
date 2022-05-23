import React from "react";

type HeaderPropsType = {
    attribute: any
}

function Header(props: HeaderPropsType) {
    return (
        <div>
            <a href='#s'>Home</a>
            <a href='#s'>News Feed</a>
            <a href='#s'>Messages</a>
        </div>
    );
}

export default Header;