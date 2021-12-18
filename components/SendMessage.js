import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({endOfMessagesRef}) {

    const {user, Moralis} = useMoralis();
    const [message, setMessage] = useState('')

    const sendMessage = (e) => {
      e.preventDefault();
      if (!message) return;
      //creates a table for messages 
      const Messages = Moralis.Object.extend('Messages');
      //gives us a new object to push to Moralis database containing messages
      const messages = new Messages();

      //message object containing message, username, ethAddress
      messages.save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      }).then((message) => {

      }, (err) => {
        console.error(err);
      })

      endOfMessagesRef.current.scrollIntoView({behavior: 'smooth'});

      setMessage('')
    }


    return (

        <form className='flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow:xl rounded-full border-4 border-blue-400'>
          <input onChange={e => setMessage(e.target.value)} value={message} type='text' className='flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5' placeholder={`Enter a message ${user.getUsername()}`} />
          <button type='submit' onClick={sendMessage} className='font-bold text-pink-500'>Send</button>
        </form>
    )
}

export default SendMessage
