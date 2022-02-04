import { ClockIcon } from "@heroicons/react/solid"


export const days = [
    {
        name:<ClockIcon className="w-5 h-5  text-slate-500"/>,
        timeStamps:[],
        isLabel:false
    },
    {
        name:'Mon',
        timeStamps:[],
        isLabel:true
    },
    {
        name:'Tue',
        timeStamps:[],
        isLabel:true
    },
    {
        name:'Wed',
        timeStamps:[],
        isLabel:true
    },
    {
        name:'Thur',
        timeStamps:[],
        isLabel:true
    },
    {
        name:'Fri',
        timeStamps:[],
        isLabel:true
    },
    {
        name:'Sat',
        timeStamps:[],
        isLabel:true
    },
    {
        name:'Sun',
        timeStamps:[],
        isLabel:true
    },
]








/**
 * for each day a list of array
 * 
 * 
 */


 export const Scheduler = () => {
    
    return(
        <div className="w-full h-fit grid grid-cols-layout gap-1 place-items-center">        
            {days.map((day)=>
                <div>{day.name}</div>    
            )}
            {
             days.map((day)=> day.timeStamps)   
            }
        </div>
    )
}
