import { useEffect, useState } from "react";
import { MoviesTypes } from "../../types/MoviesTypes";
import axios from "axios";


export const UseApi = () => {
    const [ movies, setMovies ] = useState<MoviesTypes[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    useEffect(() => {
        const data = async () => {
            setIsLoading(true);

            const req = await axios.get('https://movie-api-cwkr.onrender.com/filmes');

            setIsLoading(false);
            setMovies(req.data);
        }

        data();
    }, []);

    return{
        movies,
        isLoading
    }
}