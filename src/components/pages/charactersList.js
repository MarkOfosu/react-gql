

import useCharacters from '../../hooks/useCharacters';
import Spinner from '../spinner';
import './characterList.css'



const  CharactersList = () =>  {

     const {error, loading, data} = useCharacters();
   

        if(loading) return <div> <Spinner /> </div>;

        if (error) return <div>oops!.... something went wrong</div>;

   
        return (
            <div className='CharacterList'>
                {data.characters.results.map((character) => {
                    return(
                        <div>
                        <img src={character.image} />
                        <h2>{character.name}</h2>
                        </div>
                    );
                })}

            </div>
        );
}



export default CharactersList;