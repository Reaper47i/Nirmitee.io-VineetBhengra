import { AdjustmentsIcon, CalendarIcon, ChartSquareBarIcon, ChatAltIcon, CreditCardIcon, TemplateIcon, UserAddIcon } from "@heroicons/react/outline"


function Sidebar(){
    return(
        <div className="flex-initial w-1/6 bg-indigo-50 flex justify-between flex-col text-sm">
            <div className="flex flex-col">
                <div className="text-left py-3 px-2 h-16 text-lg flex flex-row items-center justify-start"><TemplateIcon className="w-7 h-7"/>Doc-Oc!</div>
                
                <div className="text-left py-3 px-2 flex flex-row gap-0.5 items-center justify-start"><ChartSquareBarIcon className="w-7 h-7 text-sm text-slate-600"/>Dashboard</div>
                <div className="text-left py-3 px-2 flex flex-row gap-0.5 items-center justify-start"><CalendarIcon className="w-7 h-7 text-sm text-slate-600"/>Calendar</div>
                <div className="text-left py-3 px-2 flex flex-row gap-0.5 items-center justify-start"><UserAddIcon className="w-7 h-7 text-sm text-slate-600"/>Patient List</div>
                <div className="text-left py-3 px-2 flex flex-row gap-0.5 items-center justify-start"><ChatAltIcon className="w-7 h-7 text-sm text-slate-600"/>Messages</div>
                <div className="text-left py-3 px-2 flex flex-row gap-0.5 items-center justify-start"><CreditCardIcon className="w-7 h-7 text-sm text-slate-600"/>Payment</div>
                <div className="text-left py-3 px-2 flex flex-row gap-0.5 items-center justify-start"><AdjustmentsIcon className="w-7 h-7 text-sm text-slate-600"/>Settings</div>
            </div>
            <div>
                <div className="text-left p-1">help</div>
                <div className="text-left p-1 h-12 bg-slate-500">account</div>
            </div>

            
        </div>
    )
}

export default Sidebar