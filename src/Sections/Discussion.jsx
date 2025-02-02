// import { useState, useEffect } from 'react';
// import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
// import { StreamChat } from 'stream-chat';
// import 'stream-chat-react/dist/css/v2/index.css';
// import { useLogin } from './Context';

// const client = StreamChat.getInstance('ygr3ckp5mjtw'); 

// const Discuss = ({ channelName }) => {
//   const [channel, setChannel] = useState(null);
//   const [connected, setConnected] = useState(false);
//   const { userId, userIdName, token } = useLogin();

//   console.log({ userId, userIdName, token });

//   const user = {
//     id: userId,
//     name: userIdName,
//     image: `https://getstream.io/random_png/?name=${userIdName}`,
//   };

//   useEffect(() => {
//     if (!userId || !token) {
//       client.connectAnonymousUser();
//       return;
//     }
//     const connectUser = async () => {
//       try {
//         await client.connectUser(user, token);
//         setConnected(true);
//       } catch (error) {
//         console.error('Error connecting user:', error);
//       }
//     };

//     return () => {
//       client.disconnectUser();
//     };
//   }, [userId, token]);

//   useEffect(() => {
//     if (!client || !userId || !channelName || !connected) return;

//     const newChannel = client.channel('messaging', channelName, {
//       image: `https://getstream.io/random_png/?name=${channelName}`,
//       name: `${channelName} Community`,
//       members: [userId],
//     });

//     setChannel(newChannel);
//   }, [client, channelName, userId, connected]);

//   if (!connected) return <div>Connecting to chat...</div>;
//   if (!channel) return <div>Loading chat...</div>;

//   return (
//     <Chat client={client}>
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   );
// };

// export default Discuss;

import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import { useLogin } from './Context';


const Discuss = ({ channelName }) => {
  const [channel, setChannel] = useState(null);
  const [connected, setConnected] = useState(false);
  const { userId, userIdName, token } = useLogin();

  console.log({ userId, userIdName, token });

  const user = {
    id: userId,
    name: userIdName,
    image: `https://getstream.io/random_png/?name=${userIdName}`,
  };

  const client = useCreateChatClient({
    apiKey: 'ygr3ckp5mjtw',
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
      <Channel channel={channel}>
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
