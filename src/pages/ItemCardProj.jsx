import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";


export default function ItemCardProj({props}){

    return(
        <>
        {
            props.map((link)=>
                      <Card key={link.key} className="mt-6  w-96 h-full ml-2 my-56 inline-flex  justify-center bg-cyan-900">
                        <CardHeader color="blue-gray" className="relative h-56">
                        <img className="w-full flex "
                            src={link.img}
                            alt="card-image"/>
                        </CardHeader>
                        <CardBody>
                          <Typography variant="h5" color="blue-gray" className="m-3 text-white font-bold flex justify-center">
                            {link.titulo}
                          </Typography>
                          <Typography className="text-gray-300 text-base pt-3 pr-3 pl-3 text-center">
                            {link.desc}
                          </Typography>
                        </CardBody>
                        <CardFooter className="py-6 self-center">   
                          <Link to={link.git}><Button className="bg-cyan-700 rounded-3xl shadow-2xl border-transparent border-r border-b border-l border-t py-3 px-10 font-medium inline-block mr-4 hover:bg-cyan-600  hover:text-white duration-300 hover:border border">Leia mais</Button></Link>
                        </CardFooter>
                      </Card>
            )
       }
       </>
    )    
    
}