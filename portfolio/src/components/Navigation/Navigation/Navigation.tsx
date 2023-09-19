import React, { FC } from 'react';
import NavigationItem, { NavigationItemProps } from '../NavigationItem/NavigationItem';
import './Navigation.scss';

const navItems: NavigationItemProps[] = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Projects',
        href: '/projects'
    },
    {
        title: 'Contact',
        href: '/contact'
    },
    {
        title: 'Resume',
        href: '/'
    }
]

const Navigation: FC = () => {
    return (
        <div className='navigation'>
            {navItems.map((item) => {
                return (
                <NavigationItem title={item.title} href={item.href} />
                )
            })}
        </div>
    )
}

export default Navigation;