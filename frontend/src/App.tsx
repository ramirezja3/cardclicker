import React, { useEffect, useState } from "react";
import "./App.css";

interface Card {
  id: number;
  number: number;
  click_count: number;
  first_click: string | null;
}

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [sort, setSort] = useState<string>("default");

  const fetchCards = async () => {
    const res = await fetch("http://localhost:5000/api/cards");
    const data = await res.json();
    setCards(data);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleClick = async (id: number) => {
    const res = await fetch(`http://localhost:5000/api/cards/${id}/click`, {
      method: "POST",
    });
    const updated = await res.json();
    setCards((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );
  };

  const handleClear = async () => {
    const res = await fetch("http://localhost:5000/api/cards/clear", {
      method: "POST",
    });
    const data = await res.json();
    setCards(data);
    setSort("default");
  };

  const sortedCards = [...cards].sort((a, b) => {
    if (sort === "clicks") return b.click_count - a.click_count;
    if (sort === "first") {
      if (!a.first_click)
      {
        return -1;
      }
      if (!b.first_click)
      {
        return -1;
      }
      return new Date(a.first_click).getTime() - new Date(b.first_click).getTime();
    }
    return a.number - b.number;
  });

  return (
    <div className="App">
      <h1>Click Cards</h1>
      <div className="controls">
        <button onClick={() => setSort("default")}>Original</button>
        <button onClick={() => setSort("clicks")}>Most Clicks</button>
        <button onClick={() => setSort("first")}>First Clicked</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className="grid">
        {sortedCards.map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={() => handleClick(card.id)}
          >
            <h2>{card.number}</h2>
            <p>Clicks: {card.click_count}</p>
            <p>
              First click:{" "}
              {card.first_click ? new Date(card.first_click).toLocaleString() : "—"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
