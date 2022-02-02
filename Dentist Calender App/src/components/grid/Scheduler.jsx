




export const Scheduler = () => {
    const spans = []
    let x = 900
    for(let i = 0;i<59;i++){
        x++

        spans.push(
            <span className="w-20 bg-slate-900 h-0.5" key={`${x}`} id={`${x}`}></span>
        )
    }
    return(
        <div className="w-full h-max grid grid-flow-row">        
            {spans}
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
 */
