'use client'
import { useState } from "react";

export default function Home() {
  const [newFavoriteThing, setNewFavoriteThing] = useState("");
  const [favoriteThings, setFavoriteThings] = useState( ["React", "TypeScript", "GraphQL", "Apollo", "Next.js"])

  function addThing() {
    setFavoriteThings([...favoriteThings, newFavoriteThing]);
    setNewFavoriteThing('')
  }

  return (
    <main>
      <h1>Hello world.</h1>
      <h2>My favorite things</h2>
      <input placeholder="New fave thang." 
        value={newFavoriteThing}
        onChange={(event) => setNewFavoriteThing(event.target.value) }
      
      />
      <button onClick={addThing}>Add</button>
      <ul>
        {favoriteThings.map((thing) => (
          <li key={thing}>{thing}</li>
        ))}</ul>
    </main>
  );
}
