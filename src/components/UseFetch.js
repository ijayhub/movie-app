
import { useState, useEffect } from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState([]);
	
    const [loading, setLoading] = useState(true);
    
     useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setData(data.Search);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }, 700);
			}, [url]);
    return{data,loading }
}

export default UseFetch
