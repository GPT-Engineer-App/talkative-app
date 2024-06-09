import React, { useState } from "react";
import { Box, Container, VStack, HStack, Input, IconButton, Text, Avatar, Flex } from "@chakra-ui/react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "You" }]);
      setInputValue("");
    }
  };

  return (
    <Container maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" p={0}>
      {/* Header */}
      <Flex bg="teal.500" color="white" p={4} alignItems="center">
        <Avatar icon={<FaUserCircle />} mr={3} />
        <Text fontSize="xl">Chat</Text>
      </Flex>

      {/* Message List */}
      <VStack flex={1} overflowY="auto" spacing={4} p={4} bg="gray.100">
        {messages.map((message, index) => (
          <HStack key={index} alignSelf={message.sender === "You" ? "flex-end" : "flex-start"}>
            <Box bg={message.sender === "You" ? "teal.500" : "gray.300"} color={message.sender === "You" ? "white" : "black"} px={4} py={2} borderRadius="md">
              <Text>{message.text}</Text>
            </Box>
          </HStack>
        ))}
      </VStack>

      {/* Message Input */}
      <HStack p={4} bg="white" borderTop="1px solid" borderColor="gray.200">
        <Input
          placeholder="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
      </HStack>
    </Container>
  );
};

export default Index;
