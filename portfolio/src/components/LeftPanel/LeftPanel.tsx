import React from 'react';
import './LeftPanel.scss'
import IconButton from '../IconButton/IconButton';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const LeftPanel = () => {
    return (
        <div className='panel-container'>
            <div className='panel-section'>
                <p className='hdg hdg--1 hdg--white'>Name</p>
                <p className='hdg hdg--2 hdg--primary'>William Byrd</p>
            </div>
            <div className='panel-section'>
                <p className='hdg hdg--1 hdg--white'>Occupation</p>
                <p className='hdg hdg--2 hdg--primary'>Game Developer, Video Editor</p>
            </div>
            <div className='panel-section'>
                <p className='hdg hdg--1 hdg--white'>Social</p>
                <a target='_blank' href='https://github.com/ThrillDaWill'>
                    <IconButton 
                        variant='outlined'
                        icon={                
                            <FontAwesomeIcon
                            icon={faGithub}
                            size="lg"
                            />
                        }
                    />
                </a>
                <a target='_blank' href='https://www.youtube.com/@ThrillDaWill'>
                    <IconButton 
                        variant='outlined'
                        icon={                
                            <FontAwesomeIcon
                            icon={faYoutube}
                            size="lg"
                            />
                        }
                    />
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/william-byrd-54b603225/'>
                    <IconButton 
                        variant='outlined'
                        icon={                
                            <FontAwesomeIcon
                            icon={faLinkedin}
                            size="lg"
                            />
                        }
                    />
                </a>
            </div>
            <div className='panel-section'>
                <p className='hdg hdg--1 hdg--white'>Resume</p>
                <Button variant='outlined' startIcon={faDownload} text='Download CV' onClick={() => console.log('download cv')}/>
            </div>
        </div>
    )
}

export default LeftPanel;