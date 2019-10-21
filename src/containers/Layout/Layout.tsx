import React, { ReactChild } from 'react';
import Header from '../../components/Header/Header';

type Props = {
    children: ReactChild
}

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container">
                {children}
            </main>
        </>
    )
}

export default Layout;