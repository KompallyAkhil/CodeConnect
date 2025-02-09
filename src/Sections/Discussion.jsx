import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import { EmojiPicker } from "stream-chat-react/emojis";
import { useLogin } from './Context';
import { useNavigate } from 'react-router-dom';
const Discuss = ({ channelName }) => {
  const navigate = useNavigate();
  const [channel, setChannel] = useState(null);
  const { userId, userIdName, token } = useLogin();
  useEffect(()=>{
    if(!token){
      navigate('/');
    }
  },[token])
  const user = {
    id: userId,
    name: userIdName,
    image: `https://getstream.io/random_png/?name=${userIdName}`,
  };

  const client = useCreateChatClient({
    apiKey: import.meta.env.VITE_API_KEY,
    tokenOrProvider: token,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', channelName, {
      image: 'https://getstream.io/random_png/?name=react',
      name: `${channelName} Community`,
      members: [userId],
    });

    setChannel(channel);
  }, [client]);
  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel EmojiPicker={EmojiPicker} channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default Discuss;
