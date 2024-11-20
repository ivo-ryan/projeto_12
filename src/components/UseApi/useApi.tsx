import { useEffect, useState } from "react";
import { MoviesTypes } from "../../types/MoviesTypes";
import axios from "axios";


export const UseApi = () => {
    const [ movies, setMovies ] = useState<MoviesTypes[]>([]);

    useEffect(() => {
        const data = async () => {
            const req = await axios.get('https://movie-api-cwkr.onrender.com/filmes');
            setMovies(req.data);
        }

        data();
    }, []);

    return{
        movies
    }
}