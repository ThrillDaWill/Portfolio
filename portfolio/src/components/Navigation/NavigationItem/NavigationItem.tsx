import React, { FC } from 'react';
import './NavigationItem.scss';
import Link from 'next/link';

export type NavigationItemProps = {
    title: string;
    href: string;
    isActive?: boolean;
}

const NavigationItem: FC<NavigationItemProps> = ({
    title,
    href,
    isActive = false,
}) => {
    return (
        <Link href={href} className='navItem'>{title}</Link>
    )
}

export default NavigationItem;