import {
  ArrowDownToLine,
  Clapperboard,
  Flame,
  Gamepad2,
  Home,
  Library,
  Music,
  Radio,
  ThumbsUp,
  User2Icon,
} from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const { isOpen } = useSelector((store) => store.sidenav);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='px-2 py-4 shadow-lg min-w-[220px]'>
      <section className='mb-6'>
        <ul className='flex flex-col gap-2'>
          <Link to={'/'}>
            <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
              <Home size={18} /> Home
            </li>
          </Link>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <Library size={18} /> Library
          </li>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <ThumbsUp size={18} /> Liked Videos
          </li>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <ArrowDownToLine size={18} /> Downloads
          </li>
        </ul>
      </section>
      <section className='mb-6'>
        <h6 className='pl-2 mb-2 font-semibold text-[17px]'>Subscriptions</h6>
        <ul className='flex flex-col gap-2'>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <User2Icon size={18} /> Traversy Media
          </li>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <User2Icon size={18} /> CSS Tricks
          </li>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <User2Icon size={18} /> Kevin Powell
          </li>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <User2Icon size={18} /> Free Code Camp
          </li>
        </ul>
      </section>
      <section>
        <h6 className='mb-2 pl-2 font-semibold text-[17px]'>Explore</h6>
        <ul className='flex flex-col gap-2'>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <Flame size={18} /> Trending
          </li>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <Radio size={18} />
            Live
          </li>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <Music size={18} /> Music
          </li>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <Clapperboard size={18} /> Movies
          </li>
          <li className='cursor-pointer hover:bg-gray-200 rounded-md duration-300 p-2 flex gap-3 items-center'>
            <Gamepad2 size={18} /> Gaming
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SideMenu;
