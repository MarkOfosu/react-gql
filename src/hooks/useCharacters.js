import { useQuery, gql } from '@apollo/client';


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

const  useCharacters = () => {

    const {error, loading, data} = useQuery(GET_CHARACTERS);
  
    return {
        error,
        data,
        loading
    }
}

export default useCharacters;