import { useEffect, useState } from "react";
import { MoviesTypes } from "../../types/MoviesTypes";
import axios from "axios";
import { useParams } from "react-router";

export const UseMoviesApi = () => {
    const [ movie, setMovie ] = useState<MoviesTypes[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    
    const { name } = useParams();

    useEffect(() => {
        const data = async () => {
            setIsLoading(true);
            const req = await axios.get('https://movie-api-cwkr.onrender.com/filmes');
            const res = req.data;
            const filterRes = res.filter((item:MoviesTypes) => item.name === name );

            setIsLoading(false);

            setMovie(filterRes);

        }

        data();
    }, [name]);

    return{
        movie,
        isLoading
    }
}