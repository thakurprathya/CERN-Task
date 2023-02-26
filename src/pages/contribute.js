import * as React from 'react';
import '../global.css';

import Navbar from '../components/Navbar';

const contribute = () => {
    return (
        <main>
            <Navbar/>
            <h1>contribute page</h1>
        </main>
    )
};

export const Head = () => <title>Contributor's Page</title>;
export default contribute;
