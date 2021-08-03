import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Homepage from '../PageLayout/Homepage';

const fetchFeedData = async () => {
  const result = await axios.get(`http://localhost:8000/`);
  console.log(result.data.data);
  return result.data.data;
};

function Feed() {
  const { isLoading, error, data } = useQuery(`feedData`, fetchFeedData, {
    keepPreviousData: true,
  });

  useEffect(() => {
    // axios
    //   .get(`http://localhost:8000/`)
    //   .then((res) => console.log(res.data.data))
    //   .catch((err) => console.log(err));
  }, []);

  console.log('feed');
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && data && <Homepage parent="Feed" posts={data} />}
      {!isLoading && error && <h1>error</h1>}
    </>
  );
}

export default Feed;

// <Homepage parent="Feed" posts={[]} />
