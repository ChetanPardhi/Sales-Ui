import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setBlog] = useState();
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState();

  

  useEffect(() => {
    const abortConst = new AbortController();
    setTimeout(() => {
      fetch(url,{signal : abortConst.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data from api");
          }
          return res.json();
        })
        .then((data) => {
          setBlog(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === 'AbortError'){
            console.log('Abort Fetched');
          }else{
            setPending(false);
          setError(err.message);
          }
        });
    }, 1000);

    return () => abortConst.abort();
  }, [url]);

  return { data, isPending, error, setBlog}
};

export default useFetch;
