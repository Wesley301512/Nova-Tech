import { Link } from "react-router-dom"

export default function Item({Links,title}){
    return(
        <ul>
            <h1 className="mb-1 font-semibold justify-center">{title}</h1>
        {
            Links.map( link =>
                <li key={link.name}>
                    <Link className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" to={link.link}>{link.name}</Link>
                </li>
            )
        }
        </ul>
    )
}