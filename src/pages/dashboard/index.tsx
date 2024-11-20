import { Detiong } from "../../components/detiong";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";
import { MoviesList } from "../../components/movies-list";

export const Dasboard = () => {

    return(
        <>
            <Menu/>
            <Detiong/>
            <MoviesList/>
            <Footer/>
        </>
    )
};