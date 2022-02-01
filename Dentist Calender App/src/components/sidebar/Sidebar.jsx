

function Sidebar(){
    return(
        <div className="flex-initial w-1/6 bg-indigo-50 flex justify-between flex-col">
            <div className="flex flex-col">
                <div className="text-left p-1 h-12 bg-slate-400 text-lg">Doc-Oc!</div>
                <div className="text-left p-1">Dashboard</div>
                <div className="text-left p-1">Calendar</div>
                <div className="text-left p-1">Patient List</div>
                <div className="text-left p-1">Messages</div>
                <div className="text-left p-1">Payment</div>
                <div className="text-left p-1"></div>
            </div>
            <div>
                <div className="text-left p-1">help</div>
                <div className="text-left p-1 h-12 bg-slate-500">account</div>
            </div>

            
        </div>
    )
}

export default Sidebar