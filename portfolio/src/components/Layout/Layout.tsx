import React, { PropsWithChildren } from 'react';
import './Layout.scss';
import LeftPanel from '../LeftPanel/LeftPanel';
import SystemSection from '../SystemSection/SystemSection';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <main className='app layout'>
            <SystemSection />
            <LeftPanel />
            {children}
        </main>
    )
}

export default Layout;