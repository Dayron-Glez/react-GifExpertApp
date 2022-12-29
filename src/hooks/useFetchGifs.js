import { useEffect, useState } from "react"
import { getGifs } from '../hepers/getGifs';

export const useFetchGifs = ( category ) => {

const [state, setState] = useState({
    data: [],
    loading: true
});04-gif-expert-app
useEffect(() => {

    getGifs( category )
    .then(imgs =>{

        setTimeout(() => {
            
            setState({
                data:imgs,
                loading:false
            });   

        }, 3000);

    })

}, [category]);


return state;       //{data:[], loading: true}

}
