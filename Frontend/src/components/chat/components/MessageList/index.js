import React, {useEffect, useState} from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import ChatInput from './ChatInput'
import moment from 'moment';

import './MessageList.css';

const MY_USER_ID = 'apple';

export default function MessageList(props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages();
  },[])

  
  const getMessages = () => {
     var tempMessages = [
       /*
        {
          id: 1,
          author: 'orange',
          message: 'Hi John. I hope everything goes well with your cows',
          timestamp: new Date().getTime()
        },
        {
          id: 2,
          author: 'apple',
          message: 'No, actually I struggle',
          timestamp: new Date().getTime()
        },
        {
          id: 3,
          author: 'apple',
          message: 'My feed is slowly running out. Do you know a good feed dealer?',
          timestamp: new Date().getTime()
        },
        {
          id: 4,
          author: 'orange',
          message: 'Mhmm.. Let me think...',
          timestamp: new Date().getTime()
        },
        */
        {
          id: 5,
          author: 'orange',
          message: 'Yes there is one quite close where I live.',
          timestamp: new Date().getTime()
        },
        {
          id: 6,
          author: 'orange',
          message: 'This is the address: Bumblebee Street 23242a',
          timestamp: new Date().getTime()
        },
        {
          id: 7,
          author: 'apple',
          message: 'Thank you sooo much. That really helps.',
          timestamp: new Date().getTime()
        },
        {
          id: 8,
          author: 'apple',
          message: 'How are you? Is there a lot to do right now?',
          timestamp: new Date().getTime()
        },
        {
          id: 9,
          author: 'orange',
          message: 'Im very well. thank you!',
          timestamp: new Date().getTime()
        },
        {
          id: 10,
          author: 'orange',
          message: 'I will go on a walk now.',
          timestamp: new Date().getTime()
        },
        {
          id: 11,
          author: 'apple',
          message: 'Ok all good. I am also heading outside and have a look at my cows',
          timestamp: new Date().getTime()
        },
        {
          id: 12,
          author: 'apple',
          message: 'Talk to you later.',
          timestamp: new Date().getTime()
        },
        {
          id: 13,
          author: 'orange',
          message: 'Ok. Hopefully nothings wrong.',
          timestamp: new Date().getTime()
        },
        {
          id: 14,
          author: 'orange',
          message: 'I am always here if you need anything!',
          timestamp: new Date().getTime()
        },
        {
          id: 15,
          author: 'apple',
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
      ]
      setMessages([...messages, ...tempMessages])
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

    return(
      <div className="message-list">
        <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        />
<div className="row">
        <div className="message-list-container col l12">{renderMessages()}</div>

        <div className="bubble-container_forwarded col l12">
          <div className="bubble_forwarded" >
            <div className="message_forwarded">
              <div className="img_notification_forwarded">
              </div>
              <ChatInput />
            </div>
          </div>
        </div>
</div>
        
        {/* 
        <Compose rightItems={[
          <ToolbarButton key="photo" icon="ion-ios-camera" />,
          <ToolbarButton key="image" icon="ion-ios-image" />,
          <ToolbarButton key="audio" icon="ion-ios-mic" />,
          <ToolbarButton key="money" icon="ion-ios-card" />,
          <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
          <ToolbarButton key="emoji" icon="ion-ios-happy" />
        ]}/>
        */}


      </div>
    );
}