import React from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material';

const Chat = () => {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessage */}
      <div className="chatMessages">
      </div>

      {/* chatInput */}
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="#Udemyへメッセージを送信" />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcard />
          <Gif />
          <EmojiEmotions />
        </div>
      </div>
    </div>
  )
}

export default Chat