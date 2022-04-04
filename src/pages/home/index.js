import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { APIkey } from "../../config/key"
import { Container, Listafilmes, Filme } from "./styles"


function Home () {
    const [filmes, setfilmes] = useState([])
    const url = "https://image.tmdb.org/t/p/w500"

    useEffect (() => {
        fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`)
        .then((res) => res.json())
        .then((data) => setfilmes(data.results))
    }, [])

    return(
        <Container>
            <h1>Movies</h1>
            <Listafilmes>
                {filmes.map((filme) => {
                    return(
                        <Filme key={filme.id}>
                            <Link to={`detalhes/${filme.id}`}>
                                <img src={`${url}${filme.poster_path}`} 
                                alt={filme.title}/>  
                            </Link>
                            <span>
                                {filme.title}
                            </span>        
                        </Filme>
                    )
                })}

            </Listafilmes>
        </Container>
    )
}

 export default Home 