import {Link} from 'react-router-dom'
import { usePath } from '../hooks/usePath'

export default function Header(){
    const general = 'text-slate-200 flex gap-4 items-center text-slate-200 hover:text-teal-300 hover:font-semibold'
    const current = 'text-bg-head-curr font-bold text-teal-100 flex gap-3 items-center text-slate-200 '

    const {isCurrentPage} = usePath()

    return(
        <header className='flex justify-between items-center h-20 px-6 py-5 bg-gradient-to-r  from-cyan-900 to-bg-teste shadow-xl'>
            
                <h1 className=' font-bold text-2xl text-gray-300 pl-5 '>NT.</h1>
                <nav className='flex gap-6 items-center pr-5' >    
                     
                        <Link className={isCurrentPage('/') ? current : general} to = '/'>Home
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg" >
                                <path
                                    d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z">
                                </path>
                            </svg>    
                        </Link>
                     
                     <Link className={isCurrentPage('/sobre') ? current : general} to = '/sobre'>Sobre
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg" >
                                <path
                                    d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z">
                                </path>
                            </svg>
                        </Link>
                     
                    <Link className={isCurrentPage('/nos') ? current : general} to = '/nos' >Equipe
                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg" >
                                <path d="M7 18H17V16H7V18Z" fill="currentColor"></path>
                                <path d="M17 14H7V12H17V14Z" fill="currentColor"></path>
                                <path d="M7 10H11V8H7V10Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                                    fill="currentColor">
                                </path>
                            </svg>
                        </Link>
                     
                     
                        <Link className={isCurrentPage('/contato') ? current : general} to = '/contato'>Contato
                            
                        </Link>
                     
                        <Link to = 'github.com' target='_blank'>
                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg" >
                                <path
                                    d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z"
                                    fill="currentColor">
                                </path>
                            </svg>
                        </Link>
                        <Link className={isCurrentPage('/iaexperiment') ? current : general} to = '/iaexperiment'>Ia Experiment
                            
                        </Link>
                     
                
            </nav>
        </header>
    )
}

