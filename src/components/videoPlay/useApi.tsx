import { useEffect, useState } from "react";
import { MoviesTypes } from "../../types/MoviesTypes";
import axios from "axios";
import { useParams } from "react-router";


export const UseApi = () => {
    const [ movie, setMovie ] = useState<MoviesTypes[]>([]);
    const { name } = useParams();

    useEffect(() => {
        const data = async () => {
            const req = await axios.get('https://movie-api-cwkr.onrender.com/filmes');
            const res = req.data;
            const filterMovies = res.filter((item:MoviesTypes) => item.name === name);
            setMovie(filterMovies);
        }

        data();
    }, [name]);

    return{
        movie
    }
}