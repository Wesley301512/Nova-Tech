import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import CardCompletoProj from "./CardCompletoProj"

export default function Sobre(){
    return(
        <>
            <div className="bg-gradient-to-b from-bg-1-nos to-bg-2-nos antialiased">
                
                <Header/>
                    <CardCompletoProj/>
                <Footer/>
            </div>
        </>
    )
}