import { useState } from 'react';
const TabItem = [
  {
    label: 'HOME',
    content: 'lksfnh',
    text: 'home',
  },
  {
    label: 'PROFILE',
    content: 'lksfnh',
    text: 'profile',
  },
  {
    label: 'MESSAGES',
    content: 'lksfnh',
    text: 'messages',
  },
  {
    label: 'CONTACT',
    content: 'lksfnh',
    text: 'contact',
  },
];

const Tab = () => {
  const [isActive, setIsActive] = useState('home');

  return (
    <div>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        {TabItem.map((item) => (
          <li key={item.id} className="nav-item" role="presentation">
            <a
              href="#tabs-home"
              className={`
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
      focus:border-transparent ${
        isActive === item.text ? 'active' : 'border-transparent'
      }

    `}
              active={isActive === item.text}
              onClick={() => setIsActive(item.text)}
            >
              {item.label}
            </a>
          </li>
        ))}
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
