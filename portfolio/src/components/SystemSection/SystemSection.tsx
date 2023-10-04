import React from 'react';
import './SystemSection.scss';
import Link from 'next/link';

const SystemSection: React.FC = () => {
    return (
        <div className='systemSection'>
            <h2><span className='hdg hdg--4 hdg--green'>23</span> <span className='hdg hdg--3 hdg--grey'>level</span></h2>
            <h2><span className='hdg hdg--4 hdg--green'>1,425</span> <span className='hdg hdg--3 hdg--grey'>coins awarded</span></h2>
            <div></div>
            <Link href="/credits" className='link'>
                credits
            </Link>
            <p><span className='opacity--50'>server time:</span> 8:42</p>
            <p><span className='opacity--50'>local time:</span> 15:42</p>
        </div>
    )
}

export default SystemSection;