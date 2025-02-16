import React from 'react'
import './App.css'
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import mesgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sndBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'


const App = () => {
  return (
    <div className='App'>
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="logo" className='logo'/><span className='brand'>ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={mesgIcon} alt="query" />What is Programming?</button>
            <button className="query"><img src={mesgIcon} alt="query" />How to use an API </button>
          </div>

        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home </div>
          <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Saved </div>
          <div className="listItems"><img src={rocket} alt="" className="listItemsImg" />Upgrade </div>
         
        </div>
      </div>
      <div className='main'>

        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat non dolore, sunt suscipit exercitationem necessitatibus consequuntur possimus expedita voluptates ipsam iure reprehenderit provident animi ab. Modi rem quaerat eum!</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint nobis cumque explicabo aspernatur delectus quod, reprehenderit, incidunt eaque consectetur laborum tempora iure dolorum accusamus? Sed error sunt modi fuga ex animi? Delectus odit voluptate iste vero inventore accusamus officiis numquam eius blanditiis beatae aut ex iure distinctio magni, eaque perferendis ut, dolores adipisci! Ex dolor repellat animi veniam ipsa, ratione amet iure voluptate nobis. Neque totam non perferendis deleniti fugit sapiente sequi iure laborum labore nam nesciunt blanditiis est repudiandae rerum quaerat, culpa soluta vel debitis? Nihil molestias nobis amet necessitatibus aut labore at, eius, iusto sequi totam nesciunt!</p>
          </div>


        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text"  placeholder='send a message'/><button className="send"><img src={sndBtn} alt="send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information sbout people,places or facts Chatgpt August 20 version</p>
        </div>
      </div>
      
    </div>
  )
}

export default App
