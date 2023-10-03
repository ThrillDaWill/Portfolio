import React, { PropsWithChildren } from 'react';
import './Layout.scss';
import LeftPanel from '../LeftPanel/LeftPanel';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <main className='app layout'>
            <LeftPanel />
            {children}
        </main>
    )
}

export default Layout;