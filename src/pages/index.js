import * as React from 'react';
import '../global.css';

import Navbar from '../components/Navbar';

const Index = () => {
    return (
        <main>
            <Navbar/>
            <h1>hello world</h1>
        </main>
    )
};

export const Head = () => <title>Home Page</title>;
export default Index;