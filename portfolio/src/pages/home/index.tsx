import React from 'react';
import '../../app/App.scss';
import './Home.scss';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>William Byrd - Home</title>
      </Head>
      <Layout>
        <div className='about'>
          <h1 className='hdg hdg--5 hdg--white text__center'>Who is William Byrd</h1>
          <div className='about-container'>
            <div className='info-container'>
              <div className='section-container'>
                <h2 className='hdg hdg--5 hdg--grey text__right'>Introduction</h2>
                <p className='hdg hdg--5 hdg--white'>I am a passionate Video Editor and Game Developer with a keen eye for storytelling and a flair for creativity. Proficient in the latest editing and development techniques and software, I bring a blend of technical expertise and artistic vision to every project. Whether it's a cinematic masterpiece, a promotional video, an animated feature, or a complex video game, I transform raw footage and assets into polished, impactful stories and experiences that leave a lasting impression.</p>
              </div>
              <div className='section-container'>
                <h2 className='hdg hdg--5 hdg--grey text__right'>Career and Development</h2>
                <div>
                  <p className='hdg hdg--5 hdg--white'>Currently, I am working with a small group of Game Developers and taking freelance opportunities, allowing me to work on a wide variety of fun and interesting projects and features on a daily basis.</p>
                  <p className='hdg hdg--5 hdg--white'>I also continue to upload to my YouTube channel regularly, where I challenge myself to produce exceptional games, animations, and cinematics.</p>
                  <p className='hdg hdg--5 hdg--white'>I am passionate about staying up-to-date with the latest industry trends and tools and continually learning new skills to improve my craft.</p>
                </div>
              </div>
            </div>
            <Image width={415} height={715} src="/assets/images/wireframe.png" alt='' />
          </div>
        </div>
      </Layout>
    </>
  )
}