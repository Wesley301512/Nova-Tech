import { PROJETOS } from "./MenuModalProj"
import ItemCardProj from "./ItemCardProj"

export default function CardCompletoProj(){
    return(
        <div className="flex justify-center gap-24">
            <ItemCardProj props = {PROJETOS}/>
        </div>
        
    )
}