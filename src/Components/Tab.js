import { useState } from 'react';

const Tab = () => {
  const [isActive, setIsActive] = useState('home');
  console.log('isActive', isActive);
  return (
    <div>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-home"
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
            active={isActive === 'home'}
            onClick={() => setIsActive('home')}
          >
            Home
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <button
            active={isActive === 'profile'}
            onClick={() => setIsActive('profile')}
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            active={isActive === 'messages'}
            onClick={() => setIsActive('messages')}
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
          >
            Messages
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <buttton
            active={isActive === 'contact'}
            onClick={() => setIsActive('contact')}
            className="
      nav-link

      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
          >
            Contact
          </buttton>
        </li>
      </ul>
      <div>
        {isActive === 'home' && <div className="">Tab 1 content home</div>}
        {isActive === 'profile' && <div>Tab 2 content</div>}
        {isActive === 'messages' && <div>Tab 3 content</div>}
        {isActive === 'contact' && <div>Tab 4 content</div>}
      </div>
    </div>
  );
};

export default Tab;
