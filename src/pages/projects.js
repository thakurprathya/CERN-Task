import * as React from 'react';
import '../global.css';

import Navbar from '../components/Navbar';

const projects = () => {
    return (
        <main>
            <Navbar/>
            <h1>projects page</h1>
        </main>
    )
};

export const Head = () => <title>Projects Page</title>;
export default projects;
