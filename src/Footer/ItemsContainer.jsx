import Item from "./Item"
import {HOME,SOBRE,EQUIPE,CONTATO} from './Menu'


export default function itemsContainer(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
            <Item Links={HOME} title="HOME"/>
            <Item Links={SOBRE} title="SOBRE"/>
            <Item Links={EQUIPE} title="EQUIPE"/>
            <Item Links={CONTATO} title="CONTATO"/>
        </div>
    )
}