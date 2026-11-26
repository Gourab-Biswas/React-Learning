import React, { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(3);

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=6`,
    );

    setUserData(res.data);
  };

  useEffect(() => {
    getData();
    console.log("use effect running ...");
  }, [page]);

  let dataComming = <h1 className="loading">Loading...</h1>;

  if (userData.length > 0) {
    return (
      <div className="gallary">
        <nav>
          <h2>Image Gallary:</h2>
        </nav>

        <div className="hero">
          {userData.map((elem, idx) => {
            return (
              <div key={idx} className="card">
                <img src={elem.download_url} />
              </div>
            );
          })}
        </div>

        <footer>
          <button
            onClick={() => {
              if (page > 3) {
                setPage(page - 1);
                setUserData([]);
              }
            }}
          >
            Prev
          </button>
          <h3>{page - 2}</h3>
          <button
            onClick={() => {
              setPage(page + 1);
              setUserData([]);
            }}
          >
            Next
          </button>
        </footer>
      </div>
    );
  }

  return <div>{dataComming}</div>;
};

export default App;
