import * as React from 'react';
import '../styles/global.css';

import Navbar from '../components/Navbar';

const projects = () => {
    return (
        <main>
            <Navbar/>
            <h1>projects page</h1>
        </main>
    )
};

export const Head = () => <title>HSF -Projects</title>;
export default projects;
