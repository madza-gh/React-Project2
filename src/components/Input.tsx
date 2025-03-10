import { type ComponentPropsWithoutRef } from "react"

type Inputprops = {
    id: string
    placeholder: string
}& ComponentPropsWithoutRef<'input'>


function Input({id ,placeholder,...props}:Inputprops){
    return(
        <p className="m-3 ">
            <input id={id} placeholder={placeholder} {...props} className="bg-slate-700 rounded-md p-2 "/>
        </p>
    )
}


export default Input