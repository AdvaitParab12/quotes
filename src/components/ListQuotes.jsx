import React from "react";
import SingleQuotes from "@/components/SingleQuotes";

function ListQuotes({ quote, onDelete, onLike, onDislike, }) {
  return (
    <div className="flex flex-col gap-2">
      {quote.map((quote) => (
        <SingleQuotes
          key={quote.id}
          quote={quote}
          onDelete={onDelete}
          onLike={onLike}
          onDislike={onDislike}
          
        />
      ))}
    </div>
  );
}

export default ListQuotes;
