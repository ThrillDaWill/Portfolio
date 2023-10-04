import React, { PropsWithChildren } from 'react';
import './ContentSection.scss';

const ContentSection: React.FC<PropsWithChildren> = ({children}) => {
    return(
        <div className='mainContent'>{children}</div>
    )
}

export default ContentSection;