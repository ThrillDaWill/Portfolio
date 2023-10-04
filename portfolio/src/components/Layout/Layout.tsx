import React, { PropsWithChildren } from 'react';
import './Layout.scss';
import LeftPanel from '../LeftPanel/LeftPanel';
import SystemSection from '../SystemSection/SystemSection';
import ContentSection from '../ContentSection/ContentSection';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <main className='app layout'>
            <SystemSection />
            <div className='layout__content'>
                <LeftPanel />
                <ContentSection>
                    {children}
                </ContentSection>
            </div>
        </main>
    )
}

export default Layout;