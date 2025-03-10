import { type ElementType } from "react"

type ContainerProps ={
    ComponentType : ElementType
}

function Container ({ComponentType}: ContainerProps){
    const Component = ComponentType

    return(
        <div><Component/></div>
    )
}

export default Container