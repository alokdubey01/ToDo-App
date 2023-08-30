import { BiDotsHorizontalRounded } from 'react-icons/bi';
import './App.css';
import Doing from './components/Doing';
import Done from './components/Done';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TODO from './components/TODO';
import { BsPlus } from 'react-icons/bs';

function App() {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-5'>
        <div className='hidden md:inline md:col-span-1'>
          <Sidebar />
        </div>
        <div className='w-full col-span-5 md:col-span-4 bg-[#eff1f7]'>
          <div class="w-full grid grid-cols-3 mx-2 mt-2 px-4 font-sans">
            {/* TODO */}
            <div className='col-span-1'>
              <TODO/>
            </div>

            {/* Doing */}
            <div className='col-span-1'>
              <Doing/>
            </div>

            {/* Done */}
            <div className='col-span-1'>
              <Done/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
