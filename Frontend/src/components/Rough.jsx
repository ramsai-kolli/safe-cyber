import { ChatContainer, MessageInput } from "@chatscope/chat-ui-kit-react";

function Rough() {
  return (
    <>
      <ChatContainer>
        <div as={MessageInput}>
          <MessageInput />
          <button>Custom button</button>
        </div>
      </ChatContainer>
    </>
  );
}

export default Rough;
