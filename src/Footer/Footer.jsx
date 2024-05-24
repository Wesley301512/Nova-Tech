import ItemsContainer from "./ItemsContainer"
import SocialIcon from "./SocialIcon"

export default function Footer(){
    return(
        <>
            <footer className="bg-gray-900 text-white">
                <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-footer-bg py-7"> 
                    <h1 className="lg:text4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/">
                        
                    <span className="text-teal-400">É de graça!<br/></span>
                    conheça mais da nossa equipe...     
                    </h1>
                    <div>
                        
                    </div>
                </div>
                <ItemsContainer/>
                <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pn-8">
                    <span className="self-center">© 2024 Todos os direitos reservados.</span>
                    <span className="self-center">Termos de Politica e Privacidade</span>
                    <SocialIcon/>
                </div>
            </footer>
        </>
    )
}