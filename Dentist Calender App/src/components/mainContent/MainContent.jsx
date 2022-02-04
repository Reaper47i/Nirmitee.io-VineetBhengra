import { SearchIcon,CalendarIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon } from '@heroicons/react/outline';
import { BellIcon, PlusCircleIcon, } from '@heroicons/react/solid'
import { Scheduler } from '../grid/Scheduler';

function MainContent(){
    return(
        <div className="flex flex-initial w-5/6 bg-zinc-200 flex-col">
            <div className="flex flex-row justify-between w-full h-16">
                <div className="flex flex-row gap-2 py-3 pl-3 pr-2 text-sm w-full">
                    <span className="text-xl text-blue-700 font-bold flex flex-row leading-9"><CalendarIcon className='h-full w-max pb-2.5'/>Calendar</span>
                    <span className="leading-10">List</span>
                    <span className="leading-10">Monthly</span>
                    <span className="leading-10">Weekly</span>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center pr-6 text-sm">
                    <div>
                        <div className="flex items-center justify-start bg-slate-300 p-2 h-8 rounded-full">
                            <SearchIcon className="h-5 w-7 "/>
                            <input type="text" placeholder='search' className='bg-transparent outline-none'/>
                        </div>
                    </div>
                    <button><PlusCircleIcon className='w-10 h-10 fill-blue-700 hover:fill-blue-600'/></button>
                    <button className="relative bg-slate-300 rounded-full p-1.5 hover:bg-slate-400">
                        <BellIcon className='w-6 h-6 fill-gray-600'/>
                        <span className='absolute -top-2 -right-3 py-1 px-2 rounded-full bg-red-500 text-xs'>8</span>
                    </button>
                </div>
            </div>
            <span className="w-full bg-zinc-300 h-0.5"></span>
        
            <div className="w-full h-10 flex flex-row justify-between py-2 px-3">
                <div className="w-full flex flex-row gap-1.5">
                    <div className='flex items-center justify-center bg-slate-300 py-0.5 px-2 rounded-sm'><ChevronLeftIcon className='w-4 h-4'/></div>
                    <div className='bg-slate-300 py-0.5 px-2 text-center text-sm rounded-sm w-max'>date</div>
                    <div className='flex items-center justify-center bg-slate-300 py-0.5 px-2 rounded-sm'><ChevronRightIcon className='w-4 h-4'/></div>
                </div>
                <div className='w-full flex flex-row justify-end items-center mr-2 pr-2 gap-1.5 text-sm rounded-sm'>
                    <div className='inline-block mr-2 bg-slate-300 py-0.5 px-2 rounded-sm w-max'>Request Approved</div>
                    <div className='inline-block bg-slate-300 py-0.5 px-2 rounded-sm w-max'>reload</div>
                    <div className='inline-block bg-slate-300 py-0.5 px-2 rounded-sm w-max'>print</div>
                    <div className='inline-block bg-slate-300 py-0.5 px-2 rounded-sm w-max'>filter</div>
                    <div className='inline-block bg-slate-300 py-0.5 px-2 rounded-sm w-max'>schedule</div>
                </div>
            </div>
            
            <span className="w-full bg-zinc-300 h-0.5"></span>
            
            <div className="w-full h-full">
                <Scheduler/>
            </div>
        </div>
    )
}


export default MainContent;