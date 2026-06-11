import { ChatProvider } from './context/ChatContext';
import Header from './components/Header';
import ChatPage from './pages/ChatPage';

export default function App() {
  return (
    <ChatProvider>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex-1 min-h-0">
          <ChatPage />
        </div>
      </div>
    </ChatProvider>
  );
}
