import React from 'react';
import '../App.css';
import Header from './header';
import ProfileLink from './profile-link';

const links = [
  {
    id:'twitter_link',
    href:'www.twitter.com',
    subtext:'Twitter Link'
  },
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
  {
    id:'contact',
    href:'/contact.jsx',
    subtext: 'Contact Form'
  }
]


function Home() {
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
       
    </div>
  );
}

export default Home;
