
import { useQuery, gql } from '@apollo/client';
import Spinner from '../spinner';
import './characterList.css'

const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id 
                name
                image    

            }
        }
    }
`

const  CharactersList = () =>  {

    const {error, loading, data} = useQuery(GET_CHARACTERS);

    if(loading) return <div> <Spinner /> </div>

   if (error) return <div>oops!.... something went wrong</div>;

   
    return (
        <div className='CharacterList'>
            {data.characters.results.map((character) => {
                return(
                    <div>
                    <img src={character.image} />
                    <h2>{character.name}</h2>
                    </div>
                )
            })}

        </div>
    );
}



export default CharactersList;