import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import CardCompleto from "./CardCompleto"

export default function Nos(){
    return(
        <>    
            <div  className="bg-gradient-to-b from-bg-1-nos to-bg-2-nos antialiased">
                <Header/>
                    <CardCompleto/>
                <Footer/>
            </div>
        </>
    )
}