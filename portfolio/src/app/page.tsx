import Link from 'next/link'
import './App.scss'

export default function Welcome() {
  return (
    <main className='app'>
      <div className='container'>
        <div className='title'>HI!</div>
        <div className='description'>
          <h2 className='subtitle'>My name is William Byrd. Welcome to my personal website.</h2>
          <p className='p1'>I have created this website to feel like a game/sci-fi interface. All text inside tries to reflect this.</p>
          <p className='p2'>You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.</p>
          <Link className='button' href="/home">Enter The System</Link>
        </div>
      </div>
    </main>
  )
}
