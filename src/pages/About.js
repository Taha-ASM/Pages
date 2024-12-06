import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function About() {
  const [cats, setCats] = useState([]);

  async function getCats() {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    setCats(await res.json());
  }

  useEffect(() => {
    getCats();
  },[]);

  // console.log(getCats);

  return (
    <div>
      <Header />
      <div>
        {cats.map((i) => (
          <div>
            <img className="w-40 h-40" src={i.url} />
            <p>{i.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
