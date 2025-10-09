import { useChatStore } from "../store/useChatStore";
import { useState, useEffect } from "react"; // เพิ่ม useState
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";


const HomePage = () => {
  const { selectedUser } = useChatStore();
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    document.title = "Chatapp"; 

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 1 วินาที
    return () => clearTimeout(timer);

  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black/90">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
          <p className="text-white mt-4"></p>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen bg-base-200  bg-gradient-to-l from-white/5 via-black/90 to-black/90 shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-7xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;