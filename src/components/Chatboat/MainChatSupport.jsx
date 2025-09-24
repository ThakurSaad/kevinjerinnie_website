import React, { useState, useRef, useEffect } from 'react';
import { SendOutlined, RobotOutlined, UserOutlined, DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
import { Input, Button, Avatar, Typography, Spin } from 'antd';

const { Text } = Typography;

const generateAIResponse = (message) => {
  const responses = [
    "That's an interesting point. Can you tell me more?",
    "I understand your question. Based on my knowledge, I would suggest...",
    "Thanks for sharing! Here's what I think about that...",
    "I'm processing your request. The answer to your question is...",
    "That's a great question! Here's what I know about that topic...",
    "I appreciate your patience. Let me explain this concept in detail..."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};

const MainChatSupport = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm your AI assistant. How can I help you today?", 
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: generateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      { 
        id: 1, 
        text: "Hello! I'm your AI assistant. How can I help you today?", 
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-[95vh] overflow-auto ">
      {/* Header */}
      <div className="p-4 bg-blue-800 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <RobotOutlined className="mr-2 text-xl text-white" />
            <Text className="text-lg font-semibold text-white">AI Chatbot</Text>
          </div>
          <Button 
            type="text" 
            icon={<DeleteOutlined />} 
            onClick={clearChat}
            className="text-white hover:text-gray-200"
          >
            Clear Chat
          </Button>
        </div>
      </div>
      
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-3/4 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <Avatar 
                icon={message.sender === 'user' ? <UserOutlined /> : <RobotOutlined />}
                className={message.sender === 'user' ? 'bg-blue-500 ml-2' : 'bg-green-500 mr-2'}
              />
              <div>
                <div 
                  className={`rounded-lg p-3 ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 ' 
                      : ' border border-gray-200'
                  }`}
                >
                  {message.text}
                </div>
                <div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {formatTime(message.timestamp)}
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex">
              <Avatar 
                icon={<RobotOutlined />}
                className="mr-2 bg-green-500"
              />
              <div className="p-3 border border-gray-200 rounded-lg">
                <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} /> Thinking...
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area */}
      <div className="p-4 border-t border-gray-300">
        <div className="flex">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            size="large"
            className="flex-1 mr-2"
          />
          <Button 
            type="primary" 
            icon={<SendOutlined />} 
            onClick={handleSendMessage}
            size="large"
            className="bg-blue-600"
            disabled={inputValue.trim() === '' || isLoading}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainChatSupport;
