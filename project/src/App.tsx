import React, { useState } from 'react';
import { Menu, Search, Bell, Video, User, Home, Compass, Library, ThumbsUp, Clock, PlaySquare } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format",
      title: "Beautiful Sunset Timelapse",
      channel: "Nature Photography",
      views: "120K views",
      timestamp: "2 days ago"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format",
      title: "Beginner's Guide to React",
      channel: "Code Masters",
      views: "45K views",
      timestamp: "5 days ago"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?w=500&auto=format",
      title: "Easy Cooking Recipes",
      channel: "Food & Life",
      views: "89K views",
      timestamp: "1 week ago"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0f0f0f] border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-1">
              <PlaySquare size={28} className="text-red-600" />
              <span className="text-xl font-semibold">YouTube</span>
            </div>
          </div>
          
          <div className="flex items-center flex-1 max-w-2xl mx-4">
            <div className="flex items-center flex-1">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-l-full focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-[#222222] border border-l-0 border-gray-700 rounded-r-full hover:bg-[#313131]">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Video size={20} />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Bell size={20} />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-14 w-16 h-full bg-[#0f0f0f] border-r border-gray-800">
        <nav className="flex flex-col items-center gap-6 py-4">
          <button className="flex flex-col items-center gap-1 w-full py-2 hover:bg-gray-800">
            <Home size={20} />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 w-full py-2 hover:bg-gray-800">
            <Compass size={20} />
            <span className="text-xs">Explore</span>
          </button>
          <button className="flex flex-col items-center gap-1 w-full py-2 hover:bg-gray-800">
            <Library size={20} />
            <span className="text-xs">Library</span>
          </button>
          <button className="flex flex-col items-center gap-1 w-full py-2 hover:bg-gray-800">
            <ThumbsUp size={20} />
            <span className="text-xs">Liked</span>
          </button>
          <button className="flex flex-col items-center gap-1 w-full py-2 hover:bg-gray-800">
            <Clock size={20} />
            <span className="text-xs">History</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pt-20 pl-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-2">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-gray-600"></div>
                </div>
                <div>
                  <h3 className="font-medium line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.channel}</p>
                  <p className="text-sm text-gray-400">
                    {video.views} • {video.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;