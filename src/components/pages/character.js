import useCharacter from "../../hooks/useCharacter";
import './character.css'
import Spinner from "../spinner";
import { useParams } from "react-router-dom";

const Character = () => {
    const {id} = useParams();

    const {data, loading, error} = useCharacter(id);

    if(loading) return <div> <Spinner /> </div>;

    if (error) return <div>oops!.... something went wrong</div>;

     
return (
    <div>
    <h1 className="title">{data.character.name}</h1>
        <div className="Character">
            <img alt='character' src={data.character.image} width={750} height={750} />
            <div className='Character-content'> 
                
                <p>{data.character.gender}</p>
                <div className="Character-episode">
                    {data.character.episode.map(episode => (
                        <div key={episode.name}>
                            {episode.name} - <b>{episode.episode}</b>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
}

export default Character;