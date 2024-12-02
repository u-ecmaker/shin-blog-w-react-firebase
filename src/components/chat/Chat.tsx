import React from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material';
import { ChatMessage } from './ChatMessage';

const Chat = () => {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessages */}
      <div className="chatMessages">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
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