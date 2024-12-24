import React from 'react';

const SideBar = () => {
    const menuItems = [
        { label: '홈', icon: '/img/icons/free-icon-home-5948524.png' },
        { label: '검색', icon: '/img/icons/free-icon-search-5948534.png' },
        { label: '탐색 탭', icon: '/img/icons/free-icon-compass-2948031.png' },
        { label: '릴스', icon: '/img/icons/free-icon-video-5948543.png' },
        { label: '메세지', icon: '/img/icons/free-icon-direct-instagram-5883507.png' },
        { label: '알림', icon: '/img/icons/free-icon-heart-1077035.png' },
        { label: '만들기', icon: '/img/icons/free-icon-plus-5948495.png' },
        { label: '프로필', icon: '/img/pochaco.jpg' },
      ];

      
    return (
        <nav className="fixed top-0 left-0 h-screen 
        w-18 hidden md:flex lg:w-80 bg-white border-r border-gray-300 flex-col items-center py-4">
        <div className="mb-6">
          <img src="/img/icons/instagram_line_icon.png" alt="Logo" className="h-6 lg:hidden" />
          <img src="/img/icons/instagram_text_logo.png" alt="Logo" className="hidden lg:block h-8" />
        </div>
        <div className="flex flex-col space-y-4">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="flex items-center space-x-4 hover:bg-gray-100 px-4 py-2 rounded"
            >
              <img src={item.icon} alt={item.label} className="h-6" />
              <span className="hidden lg:inline text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    );
  };
  
  export default SideBar;
  