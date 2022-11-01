import React from 'react';
import './App.css';
import Header from './components/header';
import ProfileLink from './components/profile-link';

const links = [
  {
    id:'btn__zuri',
    href:'https://training.zuri.team/',
    subtext:'Zuri'
  },
  {
    id:'books',
    href:'http://books.zuri.team',
    subtext:'Books'
  },
  {
    id:'book__python',
    href:'https://books.zuri.team/python-for-beginners?ref_id=<slack>',
    subtext:'Books On Python'
  },
  {
    id:'pitch',
    href:'https://background.zuri.team',
    subtext:'Pitch'
  },
  {
    id:'book__design',
    href:'https://books.zuri.team/design-rules',
    subtext:'Books On Rules Of Design'
  },
]


function App() {
  return (
    <div className="App">
    <Header
     twitter="Samuel Azubuike"
      imgUrl="/IMG_20200313_075650_9.jpg"
       altText="A Profile Picture Of Samuel Azubuike"/>

       {
         links.map(link => {
           return (
             <ProfileLink
             id={link.id}
             href={link.href}
             subtext={link.subtext} />
           )
         })
       }
       <section>
         <img src='/slack.png' alt='slack logo'/>  <img src='/git.png' alt='git logo'/> 
       </section>
       <footer>
         <div className="footer-first">
         <img src='/Zuri.Internship_Logo.png' alt='zuri.internship'/>
         </div>
         <div className="footer-middle">
           <h4> HNG Intership 9 Frontend Task </h4>
         </div>
         <div className="footer-last">
         <img src='/ifg.png' alt='ingressive for good'/>
         </div>
       </footer>
    </div>
  );
}

export default App;
