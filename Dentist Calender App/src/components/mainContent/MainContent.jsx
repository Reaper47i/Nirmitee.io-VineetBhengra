import { SearchIcon,CalendarIcon } from '@heroicons/react/outline';
import { BellIcon, PlusCircleIcon, } from '@heroicons/react/solid'

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
                    <button><PlusCircleIcon className='w-10 h-10 fill-blue-700'/></button>
                    <button className="relative bg-slate-300 rounded-full p-1.5">
                        <BellIcon className='w-6 h-6 fill-gray-500'/>
                        <span className='absolute -top-2 -right-2 py-1 px-2 rounded-full bg-red-500 text-xs ml-1 '>8</span>
                    </button>
                </div>
            </div>
            <span className="w-full bg-zinc-300 h-0.5"></span>

            <div className="w-full h-12">
                
            </div>
            
            <span className="w-full bg-zinc-300 h-0.5"></span>
            
            <div className="w-full h-10">
                date time
            </div>
            
            <span className="w-full bg-zinc-300 h-0.5"></span>
            
            <div className="w-full h-full">
                grid
            </div>
        </div>
    )
}


export default MainContent;