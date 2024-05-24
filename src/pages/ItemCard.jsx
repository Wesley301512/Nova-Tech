export default function Item({Links}){
    return(
        <ul>
        {
            Links.map((link)=>
                <div className=" lg:max-w-2/3 lg:pr-28 lg:pl-28 p-2 lg:flex my-7">
            <div className="flex flex-col justify-between rounded-b-2xl rounded-t-2xl border-b border-l border-r border-t border-gray-500 bg-cyan-600 p-4 leading-normal text-white shadow-2xl lg:rounded-b-2xl lg:rounded-r-2xl lg:border-l lg:border-t lg:border-gray-500 lg:border-">
              <div className="mb-8">
                <div className="mb-2 text-xl font-bold text-white">{link.nome}</div>
                <p className="text-base text-gray-200">{link.texto}</p>
              </div>
              <div className="flex items-center">
                <img className="mr-4 h-14 w-16 rounded-full" src={link.img} alt="Avatar of Jonathan Reinink" />
                <div className="text-sm">
                  <p className="leading-none text-gray-200">{link.nome}</p>
                  <p className="text-gray-300">5 de Maio</p>            
                </div>
              </div>
            </div>
          </div>
            )
        }
        </ul>
    )
}
