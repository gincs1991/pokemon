import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5")
      .then((res) => setList(res.data.results))
  }, [])
  
  return (
    <div>
      {list.map((item) => (
        <div>
          <p key={item.name}>{item.name}</p>
          <Link to={`/details/${item.name}`}>See: {item.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
