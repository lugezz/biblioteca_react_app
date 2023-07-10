import { Slider } from "../components/Slider";
import { BooksGrid } from "../components/BooksGrid";
import { Buscador } from "../components/Buscador";
import { Navbar } from "../components/Navbar";


export const BooksMain =()=>{
    return <>
    <Navbar/>
    <Slider/>
    <Buscador/>
    <BooksGrid/>
    </>
}