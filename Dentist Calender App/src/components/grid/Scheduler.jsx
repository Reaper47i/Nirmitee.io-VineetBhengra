import { days } from './TimeGrid'


let time = 895
let temp = new Array()
let space = 0
for(let i = 0; i<8;i++){
    for(let j = 0; j<12; j++){
        time+=5
        temp.push(time)
    }
    temp.push(space)
    days[i].timeStamps = temp
    time+=40
    space++
    
}
const eg = days
console.log([...days])


export const Scheduler = () => {
    
    return(
        <div className="w-full h-fit grid grid-cols-layout gap-1 place-items-center">        
            {days.map((day)=>
                <div>{day.name}</div>    
            )}
            
        </div>
    )
}
















/**
 * So the time grid can be made by using 
 * span tags the span tags will together
 * form a block like structure and they
 * will look like a single structure
 * we just need to add the division lines
 * so that we can seperate them from the 
 * desired time stamps and also we need to 
 * figure out a way to make all these things 
 * have a logic of their own by adding some 
 * func to them.
 * 
 * 
 * the span tag a time stamp like 9:00 will 
 * have child div element which will be absolute
 * and will take care of the visibility but we also need to highlight
 * all of those tags if we want to select or drag and define time stamp
 * 
 * so the total no of span elm from 900 to 1600 will be =>
 * 
 * 1+1+1+1+1+1+1 = 7hrs total
 *  7*60 = 420
 */
