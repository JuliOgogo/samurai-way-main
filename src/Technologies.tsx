import React from "react";

type TechnologiesPropsType = {
    attribute: any
}

function Technologies(props: TechnologiesPropsType) {
    return (
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
    );
}

export default Technologies;