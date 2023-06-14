

import { Link } from 'react-router-dom';
import useCharacters from '../../hooks/useCharacters';
import Spinner from '../spinner';
import './characterList.css'



const  CharactersList = () =>  {

     const {error, loading, data} = useCharacters();
   

        if(loading) return <div> <Spinner /> </div>;

        if (error) return <div>oops!.... something went wrong</div>;

   
        return (
            <div>
                <h1 className='title'>Characters From Ricky & Morty</h1>
                <div className='CharacterList'>
                    
                    {data.characters.results.map((character) => {
                        return(
                            <div key={character.name}>
                                <Link to={`${character.id}`}>
                                    <img  alt='character' src={character.image} />
                                    <h2>{character.name}</h2>
                                </Link>
                            </div>
                        ); 
                    })}

                </div>
            </div>
        );
}



export default CharactersList;