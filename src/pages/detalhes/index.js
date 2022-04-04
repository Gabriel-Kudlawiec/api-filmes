import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {APIkey} from '../../config/key'
import { Container } from "./styles"

function Detalhes () {
    const { id } = useParams()
    console.log(id)
    const [filmes, setfilmes] = useState({})
    const url = "https://image.tmdb.org/t/p/w500"

    useEffect (() => {
        fetch(`
        https://api.themoviedb.org/3/movie/${ id }?api_key=${APIkey}&language=en-US&page=1`)
        .then((res) => res.json())
        .then((data) => {
            const info_filme = {
                id,
                lancamento: data.release_date,
                sinopse: data.overview,
                titulo: data.title,
                imagem: data.poster_path
            }

            setfilmes(info_filme)
        }) 
        
    
    }, [ id ])

    

    return(
        <Container>
            
            <img src={`${url}${filmes.imagem}`} alt={filmes.titulo}/>

            <div>
                <h1>{filmes.titulo}</h1>
                <p>{filmes.sinopse}</p>
                <span>{filmes.lancamento}</span>
                <Link to="/"> <button>Go Back</button> </Link>
            </div>
        </Container>
    )
}

export default Detalhes