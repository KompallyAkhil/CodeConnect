import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';



const Discuss = ({channelName}) => {
  const [channel, setChannel] = useState();
  const apiKey = 'ygr3ckp5mjtw';
  const userId = 'Akhil';
  const userName = 'Bunny';
  const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQWtoaWwifQ.QqtZPYMlslQVXXhEOQ-QMU6yGpFDzTMthkqjr_F2JCU";
  
  
  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', channelName, {
      image: 'https://getstream.io/random_png/?name=react',
      name: channelName + " Community",
      members: [userId],
    });

    setChannel(channel);
  }, [client,channelName]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <>
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
    </>
  );
};

export default Discuss;