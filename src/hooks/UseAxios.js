import defaultAxios from "axios";
import {useEffect, useState} from "react";
import axios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    if(!opts.url) return;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axiosInstance(opts).then(data=> {
            setState({
                ...state,
                loading: false,
                data
            })
        }).catch(error => {
            setState({...state, loading: false, error})
        })
    }, []);

    return state;
}
export default useAxios;
