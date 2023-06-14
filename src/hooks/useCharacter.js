import {gql, useQuery} from '@apollo/client';
import Character from '../components/pages/character';

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id) {
            name
            image
            episode {
                name
                episode
            }
        }
    }
    
`;

const  useCharacter = (id) => {
    const {data, error, loading} = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    });
    console.log(data)
    return {
        
        data,
        error,
        loading
    }
}

export default useCharacter;
