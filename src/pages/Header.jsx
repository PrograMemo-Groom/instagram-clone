import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-white border-b border-gray-300 px-4 py-2 z-50 md:hidden">
      <div className="flex items-center">
        <button className="hover:bg-gray-100 rounded p-2">
          <img src="/img/icons/instagram_text_logo.png" alt="Instagram" className="h-8" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="검색"
            className="h-9 w-56 rounded bg-gray-100 px-4 outline-none"
          />
        </div>
        <img src="/img/icons/free-icon-heart-1077035.png" 
        alt="알림" className="h-6 cursor-pointer" />
      </div>
    </header>
  )
}

export default Header
